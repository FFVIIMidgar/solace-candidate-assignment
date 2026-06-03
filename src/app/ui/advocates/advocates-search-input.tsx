"use client";

import { useState, ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { InputGroup, InputGroupInput, InputGroupAddon } from "../../../components/ui/input-group";
import { Button } from "../../../components/ui/button";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

export default function AdvocatesSearchInput({
  searchInputText,
}: {
  searchInputText: string,
}) {
  const [searchString, setSearchString] = useState<string>(searchInputText);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const debounceTimeout = 300;

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchString(inputValue);
    handleSearch(inputValue);
  }

  const onSearchResetClick = () => {
    setSearchString("");
    router.push(pathname);
  }

  const handleSearch = useDebouncedCallback((inputValue: string) => {
    const urlSearchParams = new URLSearchParams(searchParams);

    if (inputValue) {
      urlSearchParams.set("search", inputValue);
      urlSearchParams.delete("page");
    } else {
      urlSearchParams.delete("search");
      urlSearchParams.delete("page");
    }

    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }, debounceTimeout);

  return (
    <div>
      <InputGroup>
        <InputGroupInput onChange={onSearchInputChange} value={searchString} placeholder="Search first name, last name, city, degree, specialties, or years of experience..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Button className="mt-4 bg-emerald-800 hover:bg-emerald-900" onClick={onSearchResetClick}>Reset Search</Button>
    </div>
  );
}
