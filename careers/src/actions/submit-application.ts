"use server";

import { applicationSchema } from "@/lib/validations";
import { sendApplicationEmails } from "@/lib/email/send";
import { createApplicant } from "@/services/applicant.service";

export type SubmitCareersResult =
  | { success: true }
  | {
      success: false;
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
    };

export async function submitCareersApplication(
  input: unknown,
): Promise<SubmitCareersResult> {
  const parsed = applicationSchema.safeParse(input);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: flat.fieldErrors,
    };
  }

  try {
    const applicant = await createApplicant(parsed.data);
    try {
      await sendApplicationEmails(applicant);
    } catch (emailErr) {
      console.error("[careers] Email notification failed:", emailErr);
      /** Application is still saved — ops can follow up from the database */
    }
    return { success: true };
  } catch (e) {
    console.error("[careers] Submit failed:", e);
    return {
      success: false,
      message:
        e instanceof Error
          ? e.message
          : "We couldn’t save your application. Try again in a moment.",
    };
  }
}
