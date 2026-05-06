import type { Locale, LocalizedText } from "../types";

export function localize(locale: Locale, value: LocalizedText | string) {
  return typeof value === "string" ? value : value[locale];
}
