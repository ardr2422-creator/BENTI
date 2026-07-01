"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADDRESSES } from "@/lib/site";
import { getLang, localizedHref, t } from "@/lib/i18n";
import { Phone } from "./icons";

export default function MobileActionBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const lang = getLang(pathname);
  const tr = t(lang).mobileBar;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const flagship = ADDRESSES[0];

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-500 ease-smooth`}
      aria-hidden={!show}
    >
      <div className="m-3 flex gap-2 rounded-2xl border border-sidi-ink/10 bg-paper/95 p-2 shadow-lift backdrop-blur">
        <Link
          href={localizedHref("/carte", lang)}
          className="btn btn--sidi flex-1 justify-center !py-3 !px-3 text-center"
        >
          {tr.menu}
        </Link>
        <a
          href={flagship.phoneHref}
          className="btn btn--flame flex-1 justify-center !py-3 !px-3 text-center"
        >
          <Phone className="h-4 w-4" />
          {tr.order}
        </a>
      </div>
    </div>
  );
}
