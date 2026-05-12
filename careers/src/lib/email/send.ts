import { Resend } from "resend";
import type { ApplicantWithRole } from "@/services/applicant.service";
import {
  applicantConfirmationEmail,
  internalApplicationEmail,
} from "@/lib/email/templates";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

function getFromAddress() {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) throw new Error("RESEND_FROM_EMAIL is not configured");
  return from;
}

/** Sends applicant thank-you + internal hiring notification */
export async function sendApplicationEmails(applicant: ApplicantWithRole) {
  const resend = getResend();
  const from = getFromAddress();
  const adminTo = process.env.CAREERS_ADMIN_EMAIL;
  if (!adminTo) throw new Error("CAREERS_ADMIN_EMAIL is not configured");

  const confirmation = applicantConfirmationEmail({
    name: applicant.fullName.split(" ")[0] ?? applicant.fullName,
    roleTitle: applicant.role.title,
  });

  const internal = internalApplicationEmail(applicant);

  const [userResult, adminResult] = await Promise.all([
    resend.emails.send({
      from,
      to: applicant.email,
      subject: confirmation.subject,
      html: confirmation.html,
    }),
    resend.emails.send({
      from,
      to: adminTo,
      subject: internal.subject,
      html: internal.html,
    }),
  ]);

  if (userResult.error) {
    throw new Error(userResult.error.message);
  }
  if (adminResult.error) {
    throw new Error(adminResult.error.message);
  }

  return { ok: true as const };
}
