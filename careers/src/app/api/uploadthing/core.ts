import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

/**
 * CV uploads — PDF plus Office docs via blob bucket (validate MIME in middleware).
 * Allowed extensions checked server-side.
 */
export const ourFileRouter = {
  cvUploader: f({
    pdf: { maxFileSize: "8MB", maxFileCount: 1 },
    blob: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async ({ files }) => {
      const file = files[0];
      if (!file?.name) throw new Error("No file received.");
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (!ext || !["pdf", "doc", "docx"].includes(ext)) {
        throw new Error("Only PDF, DOC, or DOCX files are accepted.");
      }
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.url,
        name: file.name,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
