"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { submitCareersApplication } from "@/actions/submit-application";
import {
  applicationSchema,
  STARTUP_OPTIONS,
  YEARS_OPTIONS,
} from "@/lib/validations";
import { useUploadThing } from "@/lib/uploadthing";
import { useAccessibleMotion } from "@/lib/motion";

import type { RoleRow } from "./OpenRolesSection";

type FormValues = z.input<typeof applicationSchema>;

const inputClass =
  "w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/35";

const labelClass =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray";

export function ApplicationForm({
  roles,
  preferredRoleId,
}: {
  roles: RoleRow[];
  preferredRoleId: string | null;
}) {
  const m = useAccessibleMotion();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileLabel, setFileLabel] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      roleId: "",
      linkedInUrl: "",
      portfolioUrl: "",
      yearsExperience: "",
      workedWithStartups: "",
      campaignsDescription: "",
      whyGetDrives: "",
      cvUrl: "",
      introVideoUrl: "",
    },
  });

  const { startUpload, isUploading } = useUploadThing("cvUploader", {
    onUploadProgress: (p) => setUploadProgress(Math.round(p)),
    onClientUploadComplete: (res) => {
      const file = res[0];
      if (!file?.url) return;
      setValue("cvUrl", file.url, { shouldValidate: true });
      setFileLabel(file.name);
      toast.success("CV uploaded");
    },
    onUploadError: (e) => {
      toast.error(e.message);
    },
  });

  useEffect(() => {
    if (preferredRoleId) {
      setValue("roleId", preferredRoleId, { shouldValidate: true });
    }
  }, [preferredRoleId, setValue]);

  async function onSubmit(values: FormValues) {
    const result = await submitCareersApplication(values);
    if (result.success) {
      toast.success("Application received. Check your inbox for confirmation.");
      reset();
      setFileLabel(null);
      setValue("cvUrl", "");
      return;
    }
    toast.error(result.message);
    if (result.fieldErrors) {
      for (const [key, msgs] of Object.entries(result.fieldErrors)) {
        const msg = msgs?.[0];
        if (msg) setError(key as keyof FormValues, { message: msg });
      }
    }
  }

  return (
    <section id="apply" className="scroll-mt-28 border-t border-white/[0.06] bg-black/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div {...m.fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Apply
          </p>
          <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.65rem,3.6vw,2.5rem)] text-white">
            Tell us how you ship.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-gray md:text-base">
            Complete the form — we review every submission. Upload a CV (PDF or Word), add links that prove your craft, and be specific about outcomes you&apos;ve driven.
          </p>
        </motion.div>

        <form className="mt-12 space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                autoComplete="name"
                className={inputClass}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-400">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={inputClass}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="location">
                Location
              </label>
              <input
                id="location"
                autoComplete="address-level2"
                placeholder="City, country"
                className={inputClass}
                {...register("location")}
              />
              {errors.location && (
                <p className="mt-1.5 text-xs text-red-400">{errors.location.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="roleId">
              Role applying for
            </label>
            <select id="roleId" className={`${inputClass} appearance-none`} {...register("roleId")}>
              <option value="">Select a role</option>
              {roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.title}
                </option>
              ))}
            </select>
            {errors.roleId && (
              <p className="mt-1.5 text-xs text-red-400">{errors.roleId.message}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="linkedInUrl">
                LinkedIn URL
              </label>
              <input
                id="linkedInUrl"
                type="url"
                placeholder="https://"
                className={inputClass}
                {...register("linkedInUrl")}
              />
              {errors.linkedInUrl && (
                <p className="mt-1.5 text-xs text-red-400">{errors.linkedInUrl.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="portfolioUrl">
                Portfolio / website
              </label>
              <input
                id="portfolioUrl"
                type="url"
                placeholder="https://"
                className={inputClass}
                {...register("portfolioUrl")}
              />
              {errors.portfolioUrl && (
                <p className="mt-1.5 text-xs text-red-400">{errors.portfolioUrl.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="yearsExperience">
                Years of experience
              </label>
              <select
                id="yearsExperience"
                className={`${inputClass} appearance-none`}
                {...register("yearsExperience")}
              >
                <option value="">Select range</option>
                {YEARS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {errors.yearsExperience && (
                <p className="mt-1.5 text-xs text-red-400">{errors.yearsExperience.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="workedWithStartups">
                Worked with startups before?
              </label>
              <select
                id="workedWithStartups"
                className={`${inputClass} appearance-none`}
                {...register("workedWithStartups")}
              >
                <option value="">Choose</option>
                {STARTUP_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {errors.workedWithStartups && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.workedWithStartups.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="campaignsDescription">
              Campaigns, projects, or startup work
            </label>
            <textarea
              id="campaignsDescription"
              rows={5}
              placeholder="What did you ship? Metrics, timelines, tools you used."
              className={`${inputClass} min-h-[120px] resize-y`}
              {...register("campaignsDescription")}
            />
            {errors.campaignsDescription && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.campaignsDescription.message}
              </p>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor="whyGetDrives">
              Why GetDrives?
            </label>
            <textarea
              id="whyGetDrives"
              rows={5}
              placeholder="What problem here pulls you in?"
              className={`${inputClass} min-h-[120px] resize-y`}
              {...register("whyGetDrives")}
            />
            {errors.whyGetDrives && (
              <p className="mt-1.5 text-xs text-red-400">{errors.whyGetDrives.message}</p>
            )}
          </div>

          <div>
            <span className={labelClass}>CV / résumé</span>
            <input type="hidden" {...register("cvUrl")} />
            <div className="flex flex-col gap-3 rounded-md border border-dashed border-white/15 bg-white/[0.02] p-5">
              <label className="inline-flex cursor-pointer flex-wrap items-center gap-3">
                <span className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-orange px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-95">
                  {isUploading ? `Uploading ${uploadProgress}%` : "Choose file"}
                </span>
                <input
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  disabled={isUploading}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    e.target.value = "";
                    if (!file) return;
                    await startUpload([file]);
                  }}
                />
                <span className="text-sm text-brand-gray">
                  {fileLabel ?? "PDF, DOC, or DOCX · max 8MB"}
                </span>
              </label>
              {errors.cvUrl && (
                <p className="text-xs text-red-400">{errors.cvUrl.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="introVideoUrl">
              Intro video (optional)
            </label>
            <input
              id="introVideoUrl"
              type="url"
              placeholder="Link to Loom, Drive, or YouTube (unlisted)"
              className={inputClass}
              {...register("introVideoUrl")}
            />
            {errors.introVideoUrl && (
              <p className="mt-1.5 text-xs text-red-400">{errors.introVideoUrl.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting || isUploading}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            {...m.buttonHover}
          >
            {isSubmitting ? "Sending…" : "Submit application"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
