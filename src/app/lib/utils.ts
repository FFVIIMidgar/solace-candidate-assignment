const phoneNumberLength = 10;

export const formatPhoneNumber = (phoneNumber: number): string => {
  const phoneNumberString = phoneNumber.toString();

  if (phoneNumberString.length != phoneNumberLength) {
    return phoneNumberString;
  }

  const match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumberString;
};

export const pluralize = (word: string, count: number): string => {
  return (count != 1) ? `${word}s` : word;
}

export const getAdvocateInitials = (firstName: string, lastName: string): string => {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
};
