"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLang, localizedHref, t } from "@/lib/i18n";

const KEY = "benti-cookie-consent";

export default function CookieBanner() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const tr = t(lang).cookie;
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
          {tr.text}{" "}
          <Link
            href={localizedHref("/cookies", lang)}
            className="font-semibold text-terracotta underline underline-offset-2"
          >
            {tr.more}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="btn btn--ghost !py-2.5 !px-4"
          >
            {tr.essential}
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="btn btn--flame !py-2.5 !px-4"
          >
            {tr.all}
          </button>
        </div>
      </div>
    </div>
  );
}
