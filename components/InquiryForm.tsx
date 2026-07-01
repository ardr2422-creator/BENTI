"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./icons";
import { SITE } from "@/lib/site";
import { t, type Lang } from "@/lib/i18n";

type Kind = "contact" | "devis";

const field =
  "w-full rounded-xl border border-sidi-ink/15 bg-paper px-4 py-3 text-sidi-ink placeholder:text-ink-soft/60 focus:border-sidi focus:outline-none focus:ring-2 focus:ring-sidi/30";
const label = "mb-1.5 block text-sm font-semibold text-sidi-ink";

export default function InquiryForm({
  kind = "contact",
  lang = "fr",
}: {
  kind?: Kind;
  lang?: Lang;
}) {
  const f = t(lang).form;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((v, k) => v && lines.push(`${k}: ${v}`));
    const subject =
      kind === "devis"
        ? "Demande de devis traiteur — Benti"
        : "Message — Benti";
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-olive/30 bg-olive/10 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-olive text-cream">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl text-sidi-ink">{f.thanks}</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">{f.thanksLead}</p>
        <button type="button" onClick={() => setSent(false)} className="btn btn--ghost mt-6">
          {f.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">{f.name}</label>
          <input id="name" name="name" required className={field} placeholder="Amira B." autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="email">{f.email}</label>
          <input id="email" name="email" type="email" required className={field} placeholder="amira@email.com" autoComplete="email" />
        </div>
      </div>

      {kind === "devis" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="company">{f.company}</label>
              <input id="company" name="company" className={field} placeholder={f.companyPh} autoComplete="organization" />
            </div>
            <div>
              <label className={label} htmlFor="phone">{f.phone}</label>
              <input id="phone" name="phone" type="tel" className={field} placeholder="06 12 34 56 78" autoComplete="tel" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={label} htmlFor="eventType">{f.eventType}</label>
              <select id="eventType" name="eventType" className={field} defaultValue="">
                <option value="" disabled>{f.choose}</option>
                {f.eventOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="date">{f.date}</label>
              <input id="date" name="date" type="date" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="guests">{f.guests}</label>
              <input id="guests" name="guests" type="number" min={1} className={field} placeholder="25" />
            </div>
          </div>
        </>
      )}

      {kind === "contact" && (
        <div>
          <label className={label} htmlFor="subject">{f.subject}</label>
          <select id="subject" name="subject" className={field} defaultValue="">
            <option value="" disabled>{f.choose}</option>
            {f.subjectOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={label} htmlFor="message">{f.message}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder={kind === "devis" ? f.messagePhDevis : f.messagePhContact}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn--flame">
          <span>{kind === "devis" ? f.sendDevis : f.send}</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <p className="text-sm text-ink-soft">{f.reply}</p>
      </div>
    </form>
  );
}
