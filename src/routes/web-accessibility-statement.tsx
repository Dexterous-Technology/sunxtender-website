import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/web-accessibility-statement")({
  head: () => ({
    meta: [
      { title: "Web Accessibility Statement | SunXtender" },
      {
        name: "description",
        content:
          "SunXtender's commitment to web accessibility under the Americans with Disabilities Act — contact us with feedback or accessibility questions.",
      },
      { property: "og:title", content: "Web Accessibility Statement | SunXtender" },
      {
        property: "og:description",
        content:
          "SunXtender's commitment to web accessibility under the Americans with Disabilities Act — contact us with feedback or accessibility questions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessibilityStatement,
});

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const COUNTRIES = [
  "United States", "Canada", "Mexico", "United Kingdom", "Australia",
  "Germany", "France", "Spain", "Italy", "Netherlands", "Other",
];

type FormFields = {
  lastName: string;
  firstName: string;
  company: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
  fax: string;
  email: string;
  captcha: string;
  message: string;
};

const EMPTY_FORM: FormFields = {
  lastName: "",
  firstName: "",
  company: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  country: "United States",
  phone: "",
  fax: "",
  email: "",
  captcha: "",
  message: "",
};

function generateCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function AccessibilityStatement() {
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [code, setCode] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setCode(generateCode());
  }, []);

  const set = (key: keyof FormFields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormFields, string>> = {};
    if (!fields.lastName.trim()) next.lastName = "Last name is required.";
    if (!fields.firstName.trim()) next.firstName = "First name is required.";
    if (!fields.email.trim()) next.email = "E-mail is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = "Enter a valid e-mail address.";
    if (!fields.captcha.trim()) next.captcha = "Security digits are required.";
    else if (fields.captcha.trim() !== code) next.captcha = "Digits do not match — please try again.";
    if (!fields.message.trim()) next.message = "Please include your message.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    setFields(EMPTY_FORM);
    setCode(generateCode());
  };

  const handleReset = () => {
    setFields(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    setCode(generateCode());
  };

  return (
    <PageShell
      eyebrow="SunXtender"
      title="Web Accessibility Statement"
      subtitle="Our commitment to an accessible website for every visitor."
    >
      <article className="mx-auto max-w-3xl">
        <h2 className="font-display text-xl tracking-tight text-foreground">
          Americans with Disabilities Act Statement
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Sun Xtender Battery Corporation is committed to making sunxtender.com
            compliant with the Americans with Disabilities Act. At this time we
            recognize that not all areas of our website may be ADA compliant. We
            are now in the process of redesigning and creating new website
            content to be compliant with the W3C Level Two guidelines.
          </p>
          <p>
            We welcome any feedback on how to improve the site&rsquo;s
            accessibility for all users. Please submit any questions or concerns.
          </p>
          <p>It is our goal to develop a website that is accessible to everyone!</p>
        </div>

        <div className="mt-10 border-l-2 border-primary bg-surface px-6 py-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            For an immediate response to your questions and comments call us
            Monday through Friday, 7:00 a.m. through 5:00 p.m., Pacific Standard
            Time.
          </p>
          <p className="mono mt-3 text-foreground">
            Phone:{" "}
            <a href="tel:+16268131234" className="text-primary hover:underline">
              (626) 813-1234
            </a>
          </p>
        </div>

        <h2 className="mt-16 font-display text-xl tracking-tight text-foreground">
          Please fill out this form to be contacted via email
        </h2>

        {submitted && (
          <div
            role="status"
            className="mt-6 border border-primary/40 bg-primary/10 px-6 py-4 text-sm text-foreground"
          >
            Thank you — your message has been received. Our team will contact you
            via email shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              id="lastName"
              label="Last Name"
              required
              value={fields.lastName}
              onChange={set("lastName")}
              error={errors.lastName}
            />
            <Field
              id="firstName"
              label="First Name"
              required
              value={fields.firstName}
              onChange={set("firstName")}
              error={errors.firstName}
            />
            <Field
              id="company"
              label="Company"
              value={fields.company}
              onChange={set("company")}
            />
            <Field
              id="address"
              label="Address"
              value={fields.address}
              onChange={set("address")}
            />
            <Field id="city" label="City" value={fields.city} onChange={set("city")} />
            <SelectField
              id="state"
              label="State"
              value={fields.state}
              onChange={set("state")}
              placeholder="select one"
              options={US_STATES}
            />
            <Field
              id="zipcode"
              label="Zipcode"
              value={fields.zipcode}
              onChange={set("zipcode")}
            />
            <SelectField
              id="country"
              label="Country"
              value={fields.country}
              onChange={set("country")}
              options={COUNTRIES}
            />
            <Field
              id="phone"
              label="Phone"
              type="tel"
              value={fields.phone}
              onChange={set("phone")}
            />
            <Field
              id="fax"
              label="Fax"
              type="tel"
              value={fields.fax}
              onChange={set("fax")}
            />
            <Field
              id="email"
              label="E-Mail"
              type="email"
              required
              value={fields.email}
              onChange={set("email")}
              error={errors.email}
            />
          </div>

          <div>
            <span className="mono block text-[10px] tracking-widest text-muted-foreground uppercase">
              For security purposes, enter the digits shown
            </span>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <span
                aria-hidden="true"
                className="mono select-none border border-border bg-surface px-4 py-2 text-lg tracking-[0.4em] text-muted-foreground line-through"
              >
                {code}
              </span>
              <div className="w-full max-w-xs">
                <input
                  id="captcha"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.captcha)}
                  aria-describedby={errors.captcha ? "captcha-error" : undefined}
                  value={fields.captcha}
                  onChange={(e) => set("captcha")(e.target.value)}
                  className="mono w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.captcha && (
                  <p id="captcha-error" className="mt-2 text-xs text-destructive">
                    {errors.captcha}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mono block text-[10px] tracking-widest text-muted-foreground uppercase"
            >
              Your Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={fields.message}
              onChange={(e) => set("message")(e.target.value)}
              className="mt-3 w-full resize-y border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <button
              type="submit"
              className="mono bg-primary px-8 py-3 text-xs tracking-widest text-primary-foreground uppercase transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mono border border-border px-8 py-3 text-xs tracking-widest text-foreground uppercase transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Reset
            </button>
          </div>
        </form>
      </article>
    </PageShell>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const inputClasses =
    "mono w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <div>
      <label
        htmlFor={id}
        className="mono block text-[10px] tracking-widest text-muted-foreground uppercase"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-3 ${inputClasses}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mono block text-[10px] tracking-widest text-muted-foreground uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mono mt-3 w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
