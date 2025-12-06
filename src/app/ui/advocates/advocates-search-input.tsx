"use client";

import { useState, ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
      <p>Searching for: {searchString}</p>
      <input style={{ border: "1px solid black" }} onChange={onSearchInputChange} value={searchString} />
      <button onClick={onSearchResetClick}>Reset Search</button>
    </div>
  );
}
