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
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};
