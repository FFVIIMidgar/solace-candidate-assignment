import AdvocatesSearchInput from "./advocates-search-input";

export default function AdvocatesSearchSection({
  searchInputText,
}: {
  searchInputText: string,
}) {
  return (
    <div>
      <p>Search</p>
      <AdvocatesSearchInput searchInputText={searchInputText}/>
    </div>
  );
}
