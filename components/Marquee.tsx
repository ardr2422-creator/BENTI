import { Fragment, type CSSProperties, type ReactNode } from "react";

type Props = {
  items: ReactNode[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  separator?: ReactNode;
  pausable?: boolean;
};

/**
 * Bannière défilante (CSS pure, boucle infinie sans couture).
 * Le contenu est dupliqué DANS une seule piste ; l'animation translate -50%
 * décale exactement une copie → boucle continue.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 34,
  className = "",
  separator = (
    <span aria-hidden className="text-sun px-2">
      ✦
    </span>
  ),
  pausable = false,
}: Props) {
  const sequence = (keyPrefix: string) =>
    items.map((item, i) => (
      <Fragment key={`${keyPrefix}-${i}`}>
        <span className="marquee__item">{item}</span>
        {separator}
      </Fragment>
    ));

  return (
    <div
      className={`marquee ${pausable ? "marquee--pausable" : ""} ${className}`}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div
        className={`marquee__track ${reverse ? "marquee--reverse" : ""}`}
        aria-hidden="true"
      >
        {sequence("a")}
        {sequence("b")}
      </div>
    </div>
  );
}
