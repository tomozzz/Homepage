type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

