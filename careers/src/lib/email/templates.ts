import type { ApplicantWithRole } from "@/services/applicant.service";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Applicant confirmation — matches GetDrives dark / orange brand */
export function applicantConfirmationEmail(params: {
  name: string;
  roleTitle: string;
}): { subject: string; html: string } {
  const name = escapeHtml(params.name);
  const roleTitle = escapeHtml(params.roleTitle);
  return {
    subject: `We received your application — ${roleTitle}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;background-color:#0B0B0B;color:#e5e5e5;font-family:Inter,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0B0B0B;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;border:1px solid rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px 28px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#FF5A1F;font-weight:700;">GetDrives Careers</p>
              <h1 style="margin:16px 0 0 0;font-size:22px;line-height:1.2;color:#ffffff;font-weight:800;text-transform:uppercase;">Thanks, ${name}</h1>
              <p style="margin:16px 0 0 0;font-size:15px;line-height:1.6;color:#A0A0A0;">
                Your application for <strong style="color:#ffffff;">${roleTitle}</strong> is in our pipeline. Our team reviews every submission — if there’s a fit, you’ll hear from us.
              </p>
              <p style="margin:16px 0 0 0;font-size:14px;line-height:1.6;color:#A0A0A0;">
                — GetDrives Talent
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px 28px;">
              <p style="margin:0;font-size:11px;color:#666666;line-height:1.5;">
                Peer-to-peer mobility for Nigerian cities. You set the fare. You choose who you move with.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

/** Internal alert for hiring inbox */
export function internalApplicationEmail(applicant: ApplicantWithRole): {
  subject: string;
  html: string;
} {
  const subject = `New application: ${applicant.role.title} — ${applicant.fullName}`;
  const rows: [string, string][] = [
    ["Role", applicant.role.title],
    ["Name", applicant.fullName],
    ["Email", applicant.email],
    ["Phone", applicant.phone],
    ["Location", applicant.location],
    ["Years experience", applicant.yearsExperience],
    ["Startup experience", applicant.workedWithStartups],
    ["LinkedIn", applicant.linkedInUrl ?? "—"],
    ["Portfolio", applicant.portfolioUrl ?? "—"],
    ["CV", applicant.cvUrl],
    ["Intro video", applicant.introVideoUrl ?? "—"],
  ];
  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);color:#A0A0A0;font-size:13px;width:140px;">${escapeHtml(k)}</td><td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:13px;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;background-color:#0B0B0B;color:#e5e5e5;font-family:Inter,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0B0B0B;padding:24px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;border:1px solid rgba(255,255,255,0.08);">
        <tr><td style="padding:20px 20px 8px 20px;">
          <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#FF5A1F;">Internal · New applicant</p>
          <h1 style="margin:12px 0 0 0;font-size:18px;color:#fff;font-weight:800;text-transform:uppercase;">${escapeHtml(applicant.fullName)}</h1>
        </td></tr>
        <tr><td style="padding:0 20px 20px 20px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${bodyRows}</table>
          <p style="margin:16px 0 0 0;font-size:12px;color:#888888;">Campaigns / projects</p>
          <p style="margin:8px 0 0 0;font-size:14px;line-height:1.6;color:#cccccc;white-space:pre-wrap;">${escapeHtml(applicant.campaignsDescription)}</p>
          <p style="margin:16px 0 0 0;font-size:12px;color:#888888;">Why GetDrives</p>
          <p style="margin:8px 0 0 0;font-size:14px;line-height:1.6;color:#cccccc;white-space:pre-wrap;">${escapeHtml(applicant.whyGetDrives)}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return { subject, html };
}
