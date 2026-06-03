import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";
import BackToTopButton from "./ui/common/back-to-top-button";
import AdvocatesDisplayGrid from "./ui/advocates/advocates-display-grid";
import { SearchParams } from "./data/types";
import { Suspense } from "react";
import AdvocateDisplayGridSkeleton from "./ui/advocates/advocate-display-grid-skeleton";
import AdvocatesHeader from "./ui/advocates/advocates-header";

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
      <AdvocatesHeader />
      <AdvocatesSearchSection searchInputText={searchString}/>
      <Suspense key={searchString} fallback={<AdvocateDisplayGridSkeleton />}>
        <AdvocatesDisplayGrid searchString={searchString} page={page}/>
        <BackToTopButton />
      </Suspense>
    </main>
  );
}
