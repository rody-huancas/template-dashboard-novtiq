import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Format Money */
type CurrencyFormatterOptions = {
  currency?: string;
  locale?: string;
};

export const formatMoney = (
  amount: number,
  { currency = "USD", locale = "en-US" }: CurrencyFormatterOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
