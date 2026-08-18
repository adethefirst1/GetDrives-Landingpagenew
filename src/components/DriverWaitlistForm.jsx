import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "../lib/analytics";
import { useAccessibleMotion } from "../motionPresets";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvwzrkk";

const CITIES = [
  { id: "lagos", label: "Lagos" },
  { id: "abuja", label: "Abuja" },
  { id: "port-harcourt", label: "Port Harcourt" },
  { id: "ibadan", label: "Ibadan" },
  { id: "other", label: "Other city" },
];

const LAGOS_AREAS = [
  "Ikeja",
  "Lekki",
  "Ajah",
  "VI / Ikoyi",
  "Yaba",
  "Surulere",
  "Festac",
  "Ikorodu",
  "Agege / Ogba",
  "Other",
];

const ABUJA_AREAS = [
  "Wuse",
  "Garki",
  "Maitama",
  "Jabi / Utako",
  "Gwarinpa",
  "Kubwa",
  "Other",
];

const VEHICLE_TYPES = [
  { id: "car", label: "Car" },
  { id: "motorcycle", label: "Motorcycle" },
  { id: "keke", label: "Keke / tricycle" },
  { id: "van", label: "Van" },
  { id: "none", label: "I don’t have one yet" },
];

const VEHICLE_SITUATIONS = [
  { id: "own", label: "I own it" },
  { id: "hire", label: "I hire / lease it" },
  { id: "none", label: "I don’t have one yet" },
];

const START_OPTIONS = [
  { id: "immediately", label: "Immediately" },
  { id: "this-week", label: "This week" },
  { id: "this-month", label: "This month" },
  { id: "exploring", label: "Just looking for now" },
];

const fieldClass =
  "min-h-[48px] w-full rounded-none border border-[#222222] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:border-brand-orange focus:outline-none focus:ring-0 disabled:opacity-60";

function labelOf(list, id) {
  return list.find((item) => item.id === id)?.label ?? id;
}

function normalizeNgPhone(raw) {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.startsWith("234") && digits.length === 13) return `+${digits}`;
  if (digits.startsWith("0") && digits.length === 11) return `+234${digits.slice(1)}`;
  if (digits.length === 10 && /^[789]/.test(digits)) return `+234${digits}`;
  return null;
}

function formatPhoneDisplay(e164) {
  if (!e164?.startsWith("+234") || e164.length !== 14) return e164;
  const rest = e164.slice(4);
  return `+234 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`;
}

async function submitToFormspree(payload) {
  const body = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value != null && value !== "") body.append(key, String(value));
  });
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const msg =
      typeof data.error === "string"
        ? data.error
        : "Something went wrong. Please try again.";
    throw new Error(msg);
  }
}

function ChoiceChip({ selected, onSelect, disabled, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onSelect}
      className={`min-h-[44px] rounded-none border px-3.5 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.12em] transition disabled:opacity-60 ${
        selected
          ? "border-brand-orange bg-brand-orange text-white"
          : "border-white/15 bg-transparent text-[#BBBBBB] hover:border-white/40 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function ChipGroup({ legend, required, children }) {
  return (
    <fieldset>
      <legend className="mb-2.5 block text-xs font-normal uppercase tracking-wide text-[#888888]">
        {legend}
        {required ? <span className="text-brand-orange"> *</span> : null}
      </legend>
      <div role="radiogroup" className="flex flex-wrap gap-2">
        {children}
      </div>
    </fieldset>
  );
}

const emptyForm = {
  fullName: "",
  phoneLocal: "",
  city: "",
  area: "",
  otherCity: "",
  otherArea: "",
  vehicleType: "",
  vehicleSituation: "",
  drivenBefore: "",
  startTiming: "",
  honeypot: "",
};

export default function DriverWaitlistForm() {
  const m = useAccessibleMotion();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const busy = status === "loading";
  const cityNeedsNamedArea = form.city === "lagos" || form.city === "abuja";
  const areaOptions = form.city === "lagos" ? LAGOS_AREAS : ABUJA_AREAS;
  const areaRequired = form.city === "lagos";
  const showOwnership = form.vehicleType && form.vehicleType !== "none";
  const showOtherArea = cityNeedsNamedArea && form.area === "Other";

  const cityLabel = useMemo(() => {
    if (form.city === "other") return form.otherCity.trim();
    return labelOf(CITIES, form.city);
  }, [form.city, form.otherCity]);

  const patch = useCallback((next) => {
    setForm((prev) => ({ ...prev, ...next }));
    setError("");
    setStatus((s) => (s === "error" ? "idle" : s));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (form.honeypot) {
        setStatus("success");
        return;
      }

      const fullName = form.fullName.trim();
      if (fullName.length < 2) {
        setError("Enter your full name.");
        return;
      }

      const phone = normalizeNgPhone(form.phoneLocal);
      if (!phone) {
        setError("Enter a valid Nigerian phone number.");
        return;
      }

      if (!form.city) {
        setError("Select the city you drive in.");
        return;
      }
      if (form.city === "other" && form.otherCity.trim().length < 2) {
        setError("Tell us which city you’re in.");
        return;
      }
      if (areaRequired && !form.area) {
        setError("Select your area in Lagos.");
        return;
      }
      if (showOtherArea && form.otherArea.trim().length < 2) {
        setError("Tell us which area.");
        return;
      }
      if (!form.vehicleType) {
        setError("Select your vehicle type.");
        return;
      }
      if (showOwnership && !form.vehicleSituation) {
        setError("Tell us if you own or hire your vehicle.");
        return;
      }
      if (!form.drivenBefore) {
        setError("Have you driven on another platform before?");
        return;
      }
      if (!form.startTiming) {
        setError("How soon could you start driving?");
        return;
      }

      const areaValue =
        form.city === "other"
          ? ""
          : showOtherArea
            ? form.otherArea.trim()
            : form.area;
      const vehicleSituation =
        form.vehicleType === "none" ? "none" : form.vehicleSituation;

      setStatus("loading");
      try {
        await submitToFormspree({
          source: "driver_waitlist",
          _subject: `Driver waitlist: ${cityLabel || "New signup"}`,
          fullName,
          phone,
          city: cityLabel,
          area: areaValue,
          vehicleType: labelOf(VEHICLE_TYPES, form.vehicleType),
          vehicleSituation: labelOf(VEHICLE_SITUATIONS, vehicleSituation),
          drivenBefore: form.drivenBefore === "yes" ? "Yes" : "No",
          startTiming: labelOf(START_OPTIONS, form.startTiming),
        });
        trackEvent("driver_waitlist_submit", {
          city: form.city,
          vehicleType: form.vehicleType,
        });
        setSubmitted({
          phone: formatPhoneDisplay(phone),
          city: cityLabel,
        });
        setForm(emptyForm);
        setStatus("success");
      } catch {
        setStatus("error");
        setError("Couldn’t join the waitlist. Please try again in a moment.");
      }
    },
    [areaRequired, cityLabel, form, showOtherArea, showOwnership],
  );

  if (status === "success" && submitted) {
    return (
      <div
        className="border border-white/10 border-t-2 border-t-brand-orange bg-[#121212] p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-orange">
          You’re in
        </p>
        <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.35rem)]">
          You’re on the list.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#BBBBBB]">
          We&apos;ll reach you on{" "}
          <span className="font-semibold text-white">{submitted.phone}</span>
          {submitted.city ? (
            <>
              {" "}
              when we start onboarding in{" "}
              <span className="font-semibold text-white">{submitted.city}</span>
            </>
          ) : null}
          . No app to download yet.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#888888]">
          Want a friend on the list too? Send them this page.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 border-t-2 border-t-brand-orange bg-[#121212] p-6 md:p-8 lg:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-orange">
        Early access
      </p>
      <h2 className="mt-3 font-extrabold uppercase leading-[0.95] tracking-tight text-white text-[clamp(1.35rem,3vw,1.75rem)]">
        Reserve your spot
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
        Takes about a minute. No app to download. We&apos;ll reach out when your city opens.
      </p>

      <form className="mt-8 space-y-6 text-left" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="company"
          value={form.honeypot}
          onChange={(e) => patch({ honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <div>
          <label htmlFor="waitlist-name" className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#888888]">
            Full name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="waitlist-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Chioma Adeyemi"
            value={form.fullName}
            onChange={(e) => patch({ fullName: e.target.value })}
            disabled={busy}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="waitlist-phone" className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#888888]">
            Phone number <span className="text-brand-orange">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex min-h-[48px] shrink-0 items-center border border-r-0 border-[#222222] bg-[#0A0A0A] px-3.5 text-sm font-semibold text-[#888888]">
              +234
            </span>
            <input
              id="waitlist-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              placeholder="801 234 5678"
              value={form.phoneLocal}
              onChange={(e) => patch({ phoneLocal: e.target.value })}
              disabled={busy}
              className={`${fieldClass} border-l-0`}
            />
          </div>
          <p className="mt-2 text-xs text-[#666666]">We&apos;ll use this number to reach you.</p>
        </div>

        <ChipGroup legend="City" required>
          {CITIES.map((city) => (
            <ChoiceChip
              key={city.id}
              selected={form.city === city.id}
              disabled={busy}
              onSelect={() =>
                patch({
                  city: city.id,
                  area: "",
                  otherArea: "",
                  otherCity: city.id === "other" ? form.otherCity : "",
                })
              }
            >
              {city.label}
            </ChoiceChip>
          ))}
        </ChipGroup>

        {form.city === "other" ? (
          <div>
            <label htmlFor="waitlist-other-city" className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#888888]">
              Which city? <span className="text-brand-orange">*</span>
            </label>
            <input
              id="waitlist-other-city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Enugu"
              value={form.otherCity}
              onChange={(e) => patch({ otherCity: e.target.value })}
              disabled={busy}
              className={fieldClass}
            />
          </div>
        ) : null}

        {cityNeedsNamedArea ? (
          <ChipGroup legend={form.city === "lagos" ? "Area in Lagos" : "Area in Abuja"} required={areaRequired}>
            {areaOptions.map((area) => (
              <ChoiceChip
                key={area}
                selected={form.area === area}
                disabled={busy}
                onSelect={() => patch({ area, otherArea: area === "Other" ? form.otherArea : "" })}
              >
                {area}
              </ChoiceChip>
            ))}
          </ChipGroup>
        ) : null}

        {form.city === "port-harcourt" || form.city === "ibadan" ? (
          <div>
            <label htmlFor="waitlist-area-optional" className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#888888]">
              Area <span className="font-normal normal-case tracking-normal text-[#666666]">(optional)</span>
            </label>
            <input
              id="waitlist-area-optional"
              type="text"
              autoComplete="address-level3"
              placeholder="e.g. GRA"
              value={form.area}
              onChange={(e) => patch({ area: e.target.value })}
              disabled={busy}
              className={fieldClass}
            />
          </div>
        ) : null}

        {showOtherArea ? (
          <div>
            <label htmlFor="waitlist-other-area" className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#888888]">
              Which area? <span className="text-brand-orange">*</span>
            </label>
            <input
              id="waitlist-other-area"
              type="text"
              placeholder="Your area"
              value={form.otherArea}
              onChange={(e) => patch({ otherArea: e.target.value })}
              disabled={busy}
              className={fieldClass}
            />
          </div>
        ) : null}

        <ChipGroup legend="Vehicle type" required>
          {VEHICLE_TYPES.map((vehicle) => (
            <ChoiceChip
              key={vehicle.id}
              selected={form.vehicleType === vehicle.id}
              disabled={busy}
              onSelect={() =>
                patch({
                  vehicleType: vehicle.id,
                  vehicleSituation: vehicle.id === "none" ? "none" : "",
                })
              }
            >
              {vehicle.label}
            </ChoiceChip>
          ))}
        </ChipGroup>

        {showOwnership ? (
          <ChipGroup legend="Do you own your vehicle?" required>
            {VEHICLE_SITUATIONS.map((item) => (
              <ChoiceChip
                key={item.id}
                selected={form.vehicleSituation === item.id}
                disabled={busy}
                onSelect={() => patch({ vehicleSituation: item.id })}
              >
                {item.label}
              </ChoiceChip>
            ))}
          </ChipGroup>
        ) : null}

        <ChipGroup legend="Have you driven on another platform before?" required>
          {[
            { id: "yes", label: "Yes" },
            { id: "no", label: "No" },
          ].map((item) => (
            <ChoiceChip
              key={item.id}
              selected={form.drivenBefore === item.id}
              disabled={busy}
              onSelect={() => patch({ drivenBefore: item.id })}
            >
              {item.label}
            </ChoiceChip>
          ))}
        </ChipGroup>

        <ChipGroup legend="How soon could you start?" required>
          {START_OPTIONS.map((item) => (
            <ChoiceChip
              key={item.id}
              selected={form.startTiming === item.id}
              disabled={busy}
              onSelect={() => patch({ startTiming: item.id })}
            >
              {item.label}
            </ChoiceChip>
          ))}
        </ChipGroup>

        {error ? (
          <p className="text-sm leading-relaxed text-brand-orange" role="alert" aria-live="assertive">
            {error}
          </p>
        ) : null}

        <motion.button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-none bg-brand-orange px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-glow-orange hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          {...(busy ? {} : m.buttonHoverProps)}
        >
          {busy ? "Joining…" : "Join the waitlist"}
          {!busy ? (
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          ) : null}
        </motion.button>

        <p className="text-xs leading-relaxed text-[#666666]">
          We&apos;ll reach out when your city opens. No fee to join.
        </p>
      </form>
    </div>
  );
}
