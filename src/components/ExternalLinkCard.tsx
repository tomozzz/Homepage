import type { ReactNode } from "react";

type ExternalLinkCardProps = {
  href?: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  newTab?: boolean;
};

export function ExternalLinkCard({
  href,
  ariaLabel,
  children,
  className = "",
  newTab = true
}: ExternalLinkCardProps) {
  const interactive = Boolean(href);
  const sharedClassName = [
    "group block rounded-[1.75rem] border p-6 transition duration-300",
    interactive
      ? "border-slate-200/90 bg-white/90 shadow-soft hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-float focus-visible:-translate-y-1.5 focus-visible:border-cyan-300 focus-visible:shadow-float"
      : "cursor-default border-slate-200/80 bg-white/75 shadow-sm",
    className
  ].join(" ");

  if (!interactive) {
    return (
      <div aria-label={ariaLabel} className={sharedClassName}>
        {children}
      </div>
    );
  }

  return (
    <a
      aria-label={ariaLabel}
      className={sharedClassName}
      href={href}
      rel={newTab ? "noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

