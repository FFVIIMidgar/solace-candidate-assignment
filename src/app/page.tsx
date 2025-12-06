import { getAllAdvocates, getFilteredAdvocates } from "./data/data";
import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";
import AdvocatesTable from "./ui/advocates/advocates-table";

export default async function Home(
  props: {
    searchParams?: Promise<{
      search?: string;
    }>
  }
) {
  const searchParams = await props.searchParams;
  const searchString = searchParams?.search || "";
  const advocates = searchString ? await getFilteredAdvocates(searchString) : await getAllAdvocates();

  return (
    <main className="mx-28 my-6">
      <div className="w-full bg-gradient-to-r from-emerald-900 to-white p-4 rounded-md">
        <h1 className="text-2xl font-bold text-white">Solace Advocates</h1>
      </div>
      <AdvocatesSearchSection searchInputText={searchString}/>
      <AdvocatesTable advocates={advocates}/>
    </main>
  );
}
