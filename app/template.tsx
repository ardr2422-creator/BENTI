"use client";

// Transition douce à chaque changement de page (remount → animation d'entrée).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
