"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./icons";
import { SITE } from "@/lib/site";

type Kind = "contact" | "devis";

const field =
  "w-full rounded-xl border border-sidi-ink/15 bg-paper px-4 py-3 text-sidi-ink placeholder:text-ink-soft/60 focus:border-sidi focus:outline-none focus:ring-2 focus:ring-sidi/30";
const label = "mb-1.5 block text-sm font-semibold text-sidi-ink";

export default function InquiryForm({ kind = "contact" }: { kind?: Kind }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Démo : pas de backend branché. On construit un mailto de secours et on
    // affiche la confirmation. À remplacer par un endpoint (/api/inquiry) ou un
    // service de formulaire (Formspree, Resend…) au lancement.
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((v, k) => v && lines.push(`${k}: ${v}`));
    const subject =
      kind === "devis" ? "Demande de devis traiteur — Benti" : "Message — Benti";
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
        <h3 className="mt-4 font-display text-2xl text-sidi-ink">Merci !</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">
          Votre message est prêt à partir. On revient vers vous très vite.
          À bientôt chez Benti.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn--ghost mt-6"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Nom & prénom
          </label>
          <input id="name" name="name" required className={field} placeholder="Amira B." autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder="amira@email.com" autoComplete="email" />
        </div>
      </div>

      {kind === "devis" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="company">
                Société / structure
              </label>
              <input id="company" name="company" className={field} placeholder="Optionnel" autoComplete="organization" />
            </div>
            <div>
              <label className={label} htmlFor="phone">
                Téléphone
              </label>
              <input id="phone" name="phone" type="tel" className={field} placeholder="06 12 34 56 78" autoComplete="tel" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={label} htmlFor="eventType">
                Type d&apos;événement
              </label>
              <select id="eventType" name="eventType" className={field} defaultValue="">
                <option value="" disabled>
                  Choisir…
                </option>
                <option>Séminaire</option>
                <option>Réunion pro</option>
                <option>Tournage</option>
                <option>Événement privé</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="date">
                Date
              </label>
              <input id="date" name="date" type="date" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="guests">
                Convives
              </label>
              <input id="guests" name="guests" type="number" min={1} className={field} placeholder="25" />
            </div>
          </div>
        </>
      )}

      {kind === "contact" && (
        <div>
          <label className={label} htmlFor="subject">
            Sujet
          </label>
          <select id="subject" name="subject" className={field} defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            <option>Une question sur la carte</option>
            <option>Traiteur / événement</option>
            <option>Presse & partenariats</option>
            <option>Autre</option>
          </select>
        </div>
      )}

      <div>
        <label className={label} htmlFor="message">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder={
            kind === "devis"
              ? "Parlez-nous de votre événement, vos envies, votre budget…"
              : "Dites-nous tout…"
          }
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn--flame">
          <span>{kind === "devis" ? "Envoyer ma demande" : "Envoyer"}</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <p className="text-sm text-ink-soft">
          Réponse sous 48h ouvrées.
        </p>
      </div>
    </form>
  );
}
