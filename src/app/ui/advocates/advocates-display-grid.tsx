import { getFilteredAdvocates, getAdvocateCount } from "../../data/data";
import AdvocateItem from "./advocate-item";
import { Separator } from "../../../components/ui/separator";
import { pluralize, getResultsString } from "../../lib/utils";
import AdvocatesPagination from "./advocates-pagination";
import { CircleAlert } from "lucide-react";
import { clamp } from "../../lib/utils";
import { Item, ItemContent } from "../../../components/ui/item";

export default async function AdvocatesDisplayGrid({
  searchString,
  page,
}: {
  searchString: string,
  page: number,
}) {
  const advocatesPageSize = 10;
  const advocateCount = await getAdvocateCount(searchString);
  const totalPages = Math.ceil(advocateCount / advocatesPageSize);

  page = clamp(page, 1, totalPages);

  const advocatesHeader = searchString
    ? `Found ${advocateCount} ${pluralize("advocate", advocateCount)} containing: "${searchString}"` 
    :`Showing all ${advocateCount} advocates`;


    const advocates = await getFilteredAdvocates(searchString, page, advocatesPageSize);

  
  return (
    <div>
      <div className="text-lg font-bold">{advocatesHeader}</div>
      <Separator className="my-6" />
      {advocateCount > 0 
      ? 
        <div>
          <div className="grid grid-cols-2 gap-2">
            {advocates.map((advocate) => {
              return (
                <AdvocateItem key={advocate.id} advocate={advocate}/>
              );
            })}
          </div>
          <div className="mt-4 text-sm font-semibold">{getResultsString(advocateCount, page, advocatesPageSize)}</div>
          <AdvocatesPagination searchString={searchString} currentPage={page} totalPages={totalPages}/>
        </div> 
      : 
        <div>
          <div className="flex justify-center m-4">
            <Item className="w-1/2 bg-gray-50 border-gray-300">
                <ItemContent>
                  <div className="flex justify-center items-center gap-1">
                    <CircleAlert />
                      <div className="text-lg font-bold">Nothing to show here! Please try again with different search criteria.</div>
                  </div>
                </ItemContent>
              </Item>
            </div>
        </div>}
    </div>
  );
}
