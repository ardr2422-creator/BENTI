"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "benti-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      /* localStorage indisponible */
    }
  }, []);

  const decide = (choice: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-sidi-ink/10 bg-paper/95 p-5 shadow-lift backdrop-blur md:flex-row md:items-center md:gap-6">
        <p className="text-sm text-ink-soft">
          On utilise des cookies pour mesurer l'audience et améliorer votre
          visite. Vous gardez la main.{" "}
          <Link
            href="/cookies"
            className="font-semibold text-terracotta underline underline-offset-2"
          >
            En savoir plus
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="btn btn--ghost !py-2.5 !px-4"
          >
            Essentiels
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="btn btn--flame !py-2.5 !px-4"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
