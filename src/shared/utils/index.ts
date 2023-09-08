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

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "COL",
  minimumFractionDigits: 0,
});
export const formatMoney = (money: number) =>
  formatter.format(money).replace("COL", "₡");

export const formatKilometers = (value: number) =>
  `${value.toLocaleString("en-US")} km`;
