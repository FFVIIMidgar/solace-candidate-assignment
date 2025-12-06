import db from "../../db";
import { advocates } from "../../db/schema";
import { or, ilike, sql } from "drizzle-orm"
import { Advocate } from "./types";
import { createAdvocatesFromDbResults } from "./dto";

export const getAllAdvocates = async (): Promise<Advocate[]> => {
  try {
    const results = await db
      .select()
      .from(advocates);

    return createAdvocatesFromDbResults(results);
  } catch (e: unknown) {
    console.error(`Database error with retrieving all advocates: ${e}`);
    
    return [];
  }
};

export const getFilteredAdvocates = async (searchString: string): Promise<Advocate[]> => {
  const preparedSearchString = `%${searchString}%`;

  try {
    const results = await db
      .select()
      .from(advocates)
      .where(
        or(
          ilike(advocates.firstName, preparedSearchString),
          ilike(advocates.lastName, preparedSearchString),
          ilike(advocates.city, preparedSearchString),
          ilike(advocates.degree, preparedSearchString),
          sql `CAST(${advocates.specialties} AS TEXT) ILIKE ${preparedSearchString}`,
          sql `CAST(${advocates.yearsOfExperience} AS TEXT) ILIKE ${preparedSearchString}`,
      )
    );
    
    return createAdvocatesFromDbResults(results);
  } catch (e: unknown) {
    console.error(`Database error with retrieving filtered advocates: ${e}`);

    return [];
  } 
};

export const seedAdvocates = async (data: any[]): Promise<Advocate[]> => {
  try {
    const results = await db.insert(advocates).values(data).returning();

    return createAdvocatesFromDbResults(results);
  }

  catch (e: unknown) {
    console.error(`Database error with seeding advocates: ${e}`);

    return [];
  }
}
