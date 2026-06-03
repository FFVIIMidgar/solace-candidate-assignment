import { advocateData } from "../../../db/seed/advocates";
import { seedAdvocates } from "../../data/data";

export async function POST() {
  const advocates = await seedAdvocates(advocateData);

  return Response.json({ advocates: advocates });
}
