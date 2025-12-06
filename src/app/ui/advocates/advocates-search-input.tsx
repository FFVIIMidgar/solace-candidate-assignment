"use client";

import { useState, ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function AdvocatesSearchInput() {
  const [searchQueryInput, setSearchQueryInput] = useState<string>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value.trim();
    setSearchQueryInput(inputValue);

    const urlSearchParams = new URLSearchParams(searchParams);

    if (inputValue) {
      urlSearchParams.set("query", inputValue);
    } else {
      urlSearchParams.delete("query");
    }

    const urlSearchParamsString = urlSearchParams.toString();
    const queryString = urlSearchParamsString ? `?${urlSearchParamsString}` : "";

    router.push(`${pathname}${queryString}`);
  }

  function onSearchResetClick() {
    setSearchQueryInput("");
    router.push(pathname);
  }

  return (
    <div>
      <p>
        Searching for: {searchQueryInput}
      </p>
      <input style={{ border: "1px solid black" }} onChange={onSearchInputChange} value={searchQueryInput} />
      <button onClick={onSearchResetClick}>Reset Search</button>
    </div>
  );
}
