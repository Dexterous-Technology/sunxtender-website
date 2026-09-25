import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { PageShell } from "@/components/page-shell";
import { COUNTRIES, US_STATES, contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SunXtender | SunXtender" },
      { name: "description", content: "Contact the Sun Xtender Battery Corporation by form, phone (626) 813-1234 or fax, Monday–Friday 7:00 a.m.–5:00 p.m. PST." },
      { property: "og:title", content: "Contact SunXtender | SunXtender" },
      { property: "og:description", content: "Contact the Sun Xtender Battery Corporation by form, phone (626) 813-1234 or fax, Monday–Friday 7:00 a.m.–5:00 p.m. PST." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const EMPTY: ContactInput = {
  lastName: "", firstName: "", company: "", address: "", city: "", state: "",
  zipcode: "", country: "United States", phone: "", fax: "", email: "", message: "",
};

type Key = keyof ContactInput;
const inputCls =
  "mono w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function Row({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-start sm:gap-6">
      <label htmlFor={id} className="mono text-[10px] tracking-widest text-muted-foreground uppercase sm:pt-3 sm:text-right">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div>
        {children}
        {error && <p id={`${id}-error`} className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
}

function ContactPage() {
  const [fields, setFields] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Key | "robot", string>>>({});
  const [robot, setRobot] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const startedAt = useRef(Date.now());
  const send = useServerFn(submitContact);

  const set = (k: Key) => (v: string) => setFields((f) => ({ ...f, [k]: v }));
  const aria = (k: Key) => ({ id: k, name: k, "aria-invalid": Boolean(errors[k]), "aria-describedby": errors[k] ? `${k}-error` : undefined });

  const text = (k: Key, label: string, required = false, type = "text") => (
    <Row id={k} label={label} required={required} error={errors[k]}>
      <input {...aria(k)} type={type} required={required} value={fields[k]} onChange={(e) => set(k)(e.target.value)} className={inputCls} />
    </Row>
  );

  const reset = () => {
    setFields(EMPTY); setErrors({}); setRobot(false); setStatus("idle"); startedAt.current = Date.now();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(fields);
    const next: typeof errors = {};
    if (!parsed.success) for (const i of parsed.error.issues) next[i.path[0] as Key] ??= i.message;
    if (!robot) next.robot = "Please confirm you're not a robot.";
    setErrors(next);
    if (Object.keys(next).length || !parsed.success) return;
    if (honeypot) { setStatus("done"); return; }
    const elapsedMs = Math.max(Date.now() - startedAt.current, 0);
    if (elapsedMs < 3000) { setErrors({ robot: "Please take a moment before submitting." }); return; }
    setStatus("sending");
    try {
      await send({ data: { ...parsed.data, website: "", elapsedMs } });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell eyebrow="Contact" title="Contact SunXtender">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Contact the Sun Xtender Battery Corporation</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Please fill out this form to be contacted via email.
            <br />For an immediate response to your questions and comments call us
            <br />Monday through Friday, 7:00 a.m. through 5:00 p.m., Pacific Standard Time.
          </p>
          <p className="mono mt-4 text-sm text-foreground">
            Phone: <a href="tel:+16268131234" className="text-primary underline underline-offset-2">(626) 813-1234</a>{" "}
            Fax: <a href="tel:+16268131235" className="text-primary underline underline-offset-2">(626) 813-1235</a>
          </p>
        </header>

        <form onSubmit={onSubmit} onReset={reset} noValidate className="mt-12 space-y-5 border border-border p-6 sm:p-10">
          {text("lastName", "Last Name", true)}
          {text("firstName", "First Name", true)}
          {text("company", "Company")}
          {text("address", "Address")}
          {text("city", "City")}
          <Row id="state" label="State">
            <select {...aria("state")} value={fields.state} onChange={(e) => set("state")(e.target.value)} className={inputCls}>
              <option value="">select one</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Row>
          {text("zipcode", "Zipcode")}
          <Row id="country" label="Country">
            <select {...aria("country")} value={fields.country} onChange={(e) => set("country")(e.target.value)} className={inputCls}>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Row>
          {text("phone", "Phone", false, "tel")}
          {text("fax", "Fax", false, "tel")}
          {text("email", "E-Mail", true, "email")}
          <Row id="message" label="Your Message Here" required error={errors.message}>
            <textarea {...aria("message")} rows={8} required value={fields.message} onChange={(e) => set("message")(e.target.value)} className={`${inputCls} resize-y`} />
          </Row>

          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </div>

          <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <div className="hidden sm:block" />
            <div>
              <label className="inline-flex items-center gap-3 border border-border bg-muted/30 px-4 py-3 text-sm text-foreground">
                <input type="checkbox" checked={robot} onChange={(e) => setRobot(e.target.checked)} aria-invalid={Boolean(errors.robot)} aria-describedby={errors.robot ? "robot-error" : undefined} className="h-5 w-5 accent-primary" />
                I'm not a robot
              </label>
              {errors.robot && <p id="robot-error" className="mt-2 text-xs text-destructive">{errors.robot}</p>}

              <div className="mt-6 flex flex-wrap gap-4">
                <button type="submit" disabled={status === "sending"} className="mono bg-primary px-8 py-3 text-xs tracking-widest text-primary-foreground uppercase transition-colors hover:bg-primary/90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {status === "sending" ? "Sending…" : "Submit"}
                </button>
                <button type="reset" className="mono border border-border px-8 py-3 text-xs tracking-widest text-foreground uppercase transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Reset
                </button>
              </div>

              <div role="status" aria-live="polite" className="mt-6 text-sm">
                {status === "done" && (
                  <p className="border border-primary/40 bg-primary/10 px-4 py-3 text-foreground">
                    Thanks — online messages aren't being delivered yet. Please call (626) 813-1234.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-destructive">Something went wrong. Please call (626) 813-1234.</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </PageShell>
  );
}
