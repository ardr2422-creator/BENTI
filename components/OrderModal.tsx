"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ADDRESSES } from "@/lib/site";
import { getLang, t } from "@/lib/i18n";
import { ArrowUpRight, Close, Phone } from "./icons";

type OrderContextValue = { open: () => void };

const OrderContext = createContext<OrderContextValue>({ open: () => {} });

/** Ouvre la pop-up « Quelle adresse ? » depuis n'importe quel bouton Commander. */
export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lang = getLang(pathname);
  const m = t(lang).orderModal;

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Échap + verrouillage du scroll quand la pop-up est ouverte.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  // On referme au changement de page.
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <OrderContext.Provider value={{ open }}>
      {children}

      <div
        className={`fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Fond */}
        <button
          type="button"
          tabIndex={isOpen ? 0 : -1}
          aria-label={m.close}
          onClick={close}
          className={`absolute inset-0 cursor-default bg-sidi-ink/55 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bulle */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
          className={`relative w-full max-w-md rounded-[1.75rem] border border-sidi-ink/10 bg-paper p-6 transition-all duration-300 ease-smooth sm:p-8 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={close}
            aria-label={m.close}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-sidi-ink/15 text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
          >
            <Close className="h-4 w-4" />
          </button>

          <p className="eyebrow !text-sidi-deep">{m.eyebrow}</p>
          <h2 id="order-modal-title" className="mt-2 font-display text-2xl text-sidi-ink">
            {m.title}
          </h2>
          <p className="mt-2 text-sm text-ink-soft">{m.lead}</p>

          <div className="mt-6 grid gap-3">
            {ADDRESSES.map((a) => (
              <a
                key={a.slug}
                href={a.phoneHref}
                onClick={close}
                className="group flex items-center gap-4 rounded-2xl border border-sidi-ink/10 bg-cream p-4 transition-colors hover:border-sidi-deep hover:bg-sidi/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sidi-deep text-cream">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-sidi-ink">{a.city}</span>
                  <span className="block truncate text-sm text-ink-soft">{a.street}</span>
                  <span className="block text-sm font-semibold text-sidi-deep">{a.phone}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-sidi-deep opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </OrderContext.Provider>
  );
}
