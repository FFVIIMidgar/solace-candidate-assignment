import { Item, ItemContent } from "../../../components/ui/item";
import { Spinner } from "../../../components/ui/spinner";

export default function AdvocateDisplayGridSkeleton() {
  return (
    <div>
      <div className="flex justify-center m-32">
        <Item className="w-1/2 bg-gray-50 border-gray-300">
          <ItemContent>
            <div className="flex justify-center items-center gap-2">
              <Spinner className="size-10" />
              <div className="text-lg font-bold">Please wait while we fetch advocates...</div>
            </div>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
