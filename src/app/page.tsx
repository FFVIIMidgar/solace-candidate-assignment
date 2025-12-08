import { getFilteredAdvocates, getAdvocateCount } from "./data/data";
import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";
import BackToTopButton from "./ui/common/back-to-top-button";
import AdvocatesDisplayGrid from "./ui/advocates/advocates-display-grid";
import { SearchParams } from "./data/types";

export default async function Home(
  props: {
    searchParams?: Promise<SearchParams>
  }
) {
  const advocatesPageSize = 10;
  const searchParams = await props.searchParams;
  const searchString = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const advocates = await getFilteredAdvocates(searchString, page, advocatesPageSize);
  const advocateCount = await getAdvocateCount(searchString);

  return (
    <main className="mx-36 my-6">
      <div className="w-full bg-gradient-to-r from-emerald-900 to-white p-4 rounded-md">
        <h1 className="text-3xl font-bold text-white">Solace Advocates</h1>
      </div>
      <AdvocatesSearchSection searchInputText={searchString}/>
      <AdvocatesDisplayGrid advocates={advocates} advocateCount={advocateCount} searchString={searchString} page={page} pageSize={advocatesPageSize}/>
      <BackToTopButton />
    </main>
  );
}
