const { google } = require('googleapis');

const SHEET_NAME = 'Waitlist';
// Columns, in order, matching row 1 of the sheet exactly:
// Submitted at | Full name | Phone | City | Area | Vehicle Type | Vehicle situation | Driven before | How soon | Status

function normalizeNigerianPhone(raw) {
  if (!raw) return null;
  const digits = String(raw).replace(/[^\d]/g, '');

  // Accept: 0XXXXXXXXXX (11 digits) or 234XXXXXXXXXX (13 digits) or +234...
  let normalized = null;
  if (digits.length === 11 && digits.startsWith('0')) {
    normalized = '234' + digits.slice(1);
  } else if (digits.length === 13 && digits.startsWith('234')) {
    normalized = digits;
  } else if (digits.length === 10) {
    // e.g. someone typed without the leading 0
    normalized = '234' + digits;
  }

  if (!normalized) return null;
  // Basic sanity check: Nigerian mobile numbers start with 234 7/8/9
  if (!/^234[789]\d{9}$/.test(normalized)) return null;
  return normalized;
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let key = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !key) {
    throw new Error('Missing Google service account environment variables');
  }

  // Vercel env vars sometimes store the private key with literal \n
  // instead of real newlines, depending on how it was pasted in.
  if (key.includes('\\n')) {
    key = key.replace(/\\n/g, '\n');
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ ok: false, error: 'Invalid JSON body' });
    }
  }

  const {
    fullName,
    phone,
    city,
    area,
    vehicleType,
    vehicleSituation,
    drivenBefore,
    howSoon,
  } = body || {};

  // Required fields
  if (!fullName || !phone || !city || !vehicleType) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required fields: fullName, phone, city, vehicleType',
    });
  }

  const normalizedPhone = normalizeNigerianPhone(phone);
  if (!normalizedPhone) {
    return res.status(400).json({
      ok: false,
      error: 'Enter a valid Nigerian phone number',
    });
  }

  const sheetId = process.env.GOOGLE_SHEETS_ID;
  if (!sheetId) {
    return res.status(500).json({ ok: false, error: 'Server misconfigured' });
  }

  let sheets;
  try {
    const auth = getAuth();
    sheets = google.sheets({ version: 'v4', auth });
  } catch (e) {
    console.error('Auth setup failed:', e.message);
    return res.status(500).json({ ok: false, error: 'Server misconfigured' });
  }

  try {
    // 1. Read the Phone column (C) to check for an existing entry.
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${SHEET_NAME}!C2:C`,
    });

    const phoneRows = existing.data.values || [];
    const alreadyExists = phoneRows.some(
      (row) => row[0] && String(row[0]).replace(/[^\d]/g, '').endsWith(normalizedPhone.slice(-10))
    );

    if (alreadyExists) {
      return res.status(200).json({
        ok: true,
        duplicate: true,
        message: "You're already on the list.",
      });
    }

    // 2. Append the new row.
    const submittedAt = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${SHEET_NAME}!A2`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [
          [
            submittedAt,
            fullName,
            normalizedPhone,
            city,
            area || '',
            vehicleType,
            vehicleSituation || '',
            drivenBefore || '',
            howSoon || '',
            'New',
          ],
        ],
      },
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Sheets write failed:', e.message);
    return res.status(500).json({
      ok: false,
      error: 'Could not save your entry. Please try again.',
    });
  }
};
