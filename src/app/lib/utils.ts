export const phoneNumberLength = 10;

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
};

export const getAdvocateInitials = (firstName: string, lastName: string): string => {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
};

export const createUrl = (url: string, params: any): string => {
  const paramsArray: string[] = [];

  for (const key in params) {
    paramsArray.push(`${key}=${params[key]}`);
  }

  return url + ((paramsArray.length > 0) ? `?${paramsArray.join("&")}` : "");
};

export const getResultsString = (total: number, page: number, pageSize: number): string => {
  const minResults = Math.max(1, page * pageSize - (pageSize - 1));
  const maxResults = Math.min(page * pageSize, total);

  return `Showing ${minResults}-${maxResults} of ${total}`;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(1, Math.min(value, max));
};
