import type { CurrencyType, LengthUnitType, WeightUnitType } from "@/contexts";

export const handleOnlyAllowNumbers = (event: KeyboardEvent) => {
  const numbericKey = +event.key;
  const isBackspacing = event.key === "Backspace";
  const isNonNumeric = !numbericKey && numbericKey !== 0;

  if (isNonNumeric && !isBackspacing) {
    event.preventDefault();
  }
};

export const detectAndroidDevice = () =>
  navigator.userAgent.toLowerCase().includes("android");

export const detectMobileDevice = () => {
  if (typeof window === "undefined") return false;

  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};

export const formatDate = (date: Date): string => {
  const newDate = typeof date === "string" ? new Date(date) : date;

  return `${newDate.getDate().toString().padStart(2, "0")}/${(
    newDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${newDate.getFullYear()}`;
};

export const formatMoney = (
  value: number,
  currency: CurrencyType = "colon"
) => {
  const currencyMapper: Record<CurrencyType, string> = {
    colon: "COL",
    dollar: "USD",
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyMapper[currency],
    minimumFractionDigits: 0,
  });

  return formatter.format(value).replace("COL", "₡").replace(/\s/g, "");
};

export const formatLength = (
  value: number,
  lengthUnit: LengthUnitType = "meters"
) => {
  const lengthMapper: Record<LengthUnitType, string> = {
    meters: "km",
    miles: "mi",
  };

  return `${value.toLocaleString("en-US")} ${lengthMapper[lengthUnit]}`;
};

export const formatWeight = (
  value: number,
  weightUnit: WeightUnitType = "grams"
) => {
  const weightMapper: Record<WeightUnitType, string> = {
    grams: "kg",
    pounds: "lb.",
  };

  return `${value.toLocaleString("en-US")} ${weightMapper[weightUnit]}`;
};
