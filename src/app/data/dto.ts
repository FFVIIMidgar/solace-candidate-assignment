import { Advocate } from "./types";

export const createAdvocatesFromDbResults = (results: any[]): Advocate[] => {
  const advocates: Advocate[] = [];

  results.forEach((data) => {
    advocates.push(createAdvocateFromData(data));
  });

  return advocates;
};

export const createAdvocateFromData = (
  data: {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialties: unknown;
    yearsOfExperience: number;
    phoneNumber: number;
    createdAt: Date | null;
  },
): Advocate => {
  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    city: data.city,
    degree: data.degree,
    specialties: data.specialties as string[],
    yearsOfExperience: data.yearsOfExperience,
    phoneNumber: data.phoneNumber,
    createdAt: data.createdAt,
  };
};
