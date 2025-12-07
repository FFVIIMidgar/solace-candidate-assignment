const phoneNumberLength = 10;

export const formatPhoneNumber = (phoneNumber: number): string => {
  const phoneNumberText = phoneNumber.toString();

  if (phoneNumberText.length != phoneNumberLength) {
    return phoneNumberText;
  }

  const match = phoneNumberText.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumberText;
};
