import katex from "katex";
import "katex/dist/katex.min.css";

type MathFormulaProps = {
  expression: string;
  display?: boolean;
  className?: string;
  ariaLabel: string;
};

export function MathFormula({
  expression,
  display = false,
  className = "",
  ariaLabel
}: MathFormulaProps) {
  const html = katex.renderToString(expression, {
    displayMode: display,
    output: "htmlAndMathml",
    strict: false,
    throwOnError: false
  });

  if (display) {
    return (
      <div
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
        role="math"
      />
    );
  }

  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      role="math"
    />
  );
}
