"use client";

import { useState, ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function AdvocatesSearchInput({
  searchInputText,
}: {
  searchInputText: string,
}) {
  const [searchString, setSearchString] = useState<string>(searchInputText);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const urlSearchParams = new URLSearchParams(searchParams);

    setSearchString(inputValue);

    if (inputValue) {
      urlSearchParams.set("search", inputValue);
    } else {
      urlSearchParams.delete("search");
    }

    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }

  const onSearchResetClick = () => {
    setSearchString("");
    router.push(pathname);
  }

  return (
    <div>
      <Input onChange={onSearchInputChange} value={searchString} placeholder="Search first name, last name, city, degree, specialties, or years of experience..." />
      <Button className="mt-4 bg-emerald-800 hover:bg-emerald-900" onClick={onSearchResetClick}>Reset Search</Button>
    </div>
  );
}
