import { getAllAdvocates, getFilteredAdvocates } from "./data/data";
import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";
import BackToTopButton from "./ui/common/back-to-top-button";
import AdvocatesDisplayGrid from "./ui/advocates/advocates-display-grid";

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
    <main className="mx-36 my-6">
      <div className="w-full bg-gradient-to-r from-emerald-900 to-white p-4 rounded-md">
        <h1 className="text-3xl font-bold text-white">Solace Advocates</h1>
      </div>
      <AdvocatesSearchSection searchInputText={searchString}/>
      <AdvocatesDisplayGrid advocates={advocates} searchString={searchString}/>
      <BackToTopButton />
    </main>
  );
}
