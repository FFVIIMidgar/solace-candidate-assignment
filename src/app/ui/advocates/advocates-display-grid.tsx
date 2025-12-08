import { Advocate } from "../../data/types";
import AdvocateItem from "./advocate-item";
import { Separator } from "../../../components/ui/separator";
import { pluralize, getResultsString } from "../../lib/utils";
import AdvocatesPagination from "./advocates-pagination";
import { CircleAlert } from "lucide-react";

export default async function AdvocatesDisplayGrid({
  advocates,
  advocateCount,
  searchString,
  page,
  pageSize,
}: {
  advocates: Advocate[],
  advocateCount: number,
  searchString: string,
  page: number,
  pageSize: number,
}) {
  const advocatesHeader = searchString
    ? `Found ${advocateCount} ${pluralize("advocate", advocateCount)} containing: "${searchString}"` 
    :`Showing all ${advocateCount} advocates`;

  const totalPages = Math.ceil(advocateCount / pageSize);
  
  return (
    <div>
      <div className="text-lg font-bold">{advocatesHeader}</div>
      <Separator className="my-6" />
      {advocateCount > 0 
      ? <div>
          <div className="grid grid-cols-2 gap-2">
            {advocates.map((advocate) => {
              return (
                <AdvocateItem key={advocate.id} advocate={advocate}/>
              );
            })}
          </div>
          <div className="mt-4 text-sm font-semibold">{getResultsString(advocateCount, page, pageSize)}</div>
          <AdvocatesPagination searchString={searchString} currentPage={page} totalPages={totalPages}/>
        </div> 
      : 
        <div>
          <div className="flex justify-center items-center gap-1 m-4">
            <CircleAlert />
            <div className="text-base font-bold">Nothing to show here! Please try again with different search criteria.</div>
          </div>
        </div>}
    </div>
  );
}
