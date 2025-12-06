import { getAllAdvocates } from "../../data/data";

export async function GET() {
  const advocates = await getAllAdvocates();
 
  return Response.json({ advocates: advocates });
}
