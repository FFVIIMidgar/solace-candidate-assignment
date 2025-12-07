import { Advocate } from "../../data/types";
import AdvocateItem from "./advocate-item";
import { Separator } from "../../../components/ui/separator";
import { pluralize } from "../../lib/utils";

export default async function AdvocatesDisplayGrid({
  advocates,
  searchString,
}: {
  advocates: Advocate[],
  searchString: string,
}) {
  const advocatesHeader = searchString
    ? `Found ${advocates.length} ${pluralize("advocate", advocates.length)} containing: "${searchString}"` 
    :`Showing all ${advocates.length} advocates`;
  
  return (
    <div>
      <div className="text-lg font-bold">{advocatesHeader}</div>
      <Separator className="my-6" />
      <div className="grid grid-cols-2 gap-2">
        {advocates.map((advocate) => {
          return (
            <AdvocateItem key={advocate.id} advocate={advocate}/>
          );
        })}
      </div>
    </div>
  );
}
