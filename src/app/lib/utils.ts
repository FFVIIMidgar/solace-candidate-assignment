import { PageLink, PageLinkType } from "../data/types";

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
}

export const getAdvocateInitials = (firstName: string, lastName: string): string => {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
};

export const createUrl = (url: string, params: any): string => {
  let paramsArray: string[] = [];

  for (let key in params) {
    paramsArray.push(`${key}=${params[key]}`);
  }

  return url + ((paramsArray.length > 0) ? `?${paramsArray.join("&")}` : "");
}

export const getResultsString = (total: number, page: number, pageSize: number): string => {
  let minResults = page * pageSize - (pageSize - 1);
  let maxResults = page * pageSize;

  if (minResults < 1) {
    minResults = 1;
  }

  if (maxResults > total) {
    maxResults = total;
  }

  return `Showing ${minResults}-${maxResults} of ${total}`;
}

