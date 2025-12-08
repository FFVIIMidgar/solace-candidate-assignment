import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";
import BackToTopButton from "./ui/common/back-to-top-button";
import AdvocatesDisplayGrid from "./ui/advocates/advocates-display-grid";
import { SearchParams } from "./data/types";
import { Suspense } from "react";
import AdvocateDisplayGridSkeleton from "./ui/advocates/advocate-display-grid-skeleton";

export default async function Home(
  props: {
    searchParams?: Promise<SearchParams>
  }
) {
  const searchParams = await props.searchParams;
  const searchString = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <main className="mx-36 my-6">
      <div className="w-full bg-gradient-to-r from-emerald-900 to-white p-4 rounded-md">
        <h1 className="text-3xl font-bold text-white">Solace Advocates</h1>
      </div>
      <AdvocatesSearchSection searchInputText={searchString}/>
      <Suspense key={searchString} fallback={<AdvocateDisplayGridSkeleton />}>
        <AdvocatesDisplayGrid searchString={searchString} page={page}/>
        <BackToTopButton />
      </Suspense>
    </main>
  );
}
