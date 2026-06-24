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
    <div className={`mb-12 border-t border-slate-300 pt-5 ${alignClass}`}>
      <span className="section-kicker">{eyebrow}</span>
      <div
        className={
          align === "center"
            ? "mx-auto mt-4 max-w-3xl space-y-4"
            : "mt-4 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12"
        }
      >
        <h2 className="display-title">
          {title}
        </h2>
        {description ? (
          <p className="body-copy max-w-3xl">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
