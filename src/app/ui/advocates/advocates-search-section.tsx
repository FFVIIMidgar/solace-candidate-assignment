import AdvocatesSearchInput from "./advocates-search-input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";

export default function AdvocatesSearchSection({
  searchInputText,
}: {
  searchInputText: string,
}) {
  return (
    <div>
      <div className="flex justify-center my-12">
        <Card className="w-2/3 border-gray-300 drop-shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Search Advocates</CardTitle>
            <CardDescription>Find the health advocate who is right for you!</CardDescription>
          </CardHeader>
          <CardContent>
            <AdvocatesSearchInput searchInputText={searchInputText}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
