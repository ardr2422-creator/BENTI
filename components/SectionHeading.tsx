import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  light = false,
  className = "",
}: Props) {
  return (
    <div
      className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow reveal ${center ? "eyebrow--center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`reveal mt-4 text-balance font-display text-[clamp(2rem,1.6rem+2vw,3.4rem)] ${
          light ? "text-cream" : "text-sidi-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`reveal mt-5 text-pretty text-lg ${
            light ? "text-cream/75" : "text-ink-soft"
          } ${center ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
