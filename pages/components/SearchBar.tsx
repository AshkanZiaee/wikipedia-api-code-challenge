import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useQuery } from "react-query";
import SearchResult from "./SearchResult";

export interface resultType {
  result: {
    ns: number;
    pageid: number;
    size: number;
    snippet: string;
    timestamp: string;
    title: string;
    wordCount: number;
  };
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const fetchWikipedia = async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${searchQuery}`
    );
    return response.json();
  };
  const { data, status } = useQuery(
    ["searchResult", searchQuery],
    fetchWikipedia
  );
  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-cyan-300">
        <label className="text-xl p-2">
          Search in Wikipedia
          <br />
          <input
            className="border w-full"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = e.target as HTMLInputElement;
                setSearchQuery(target.value);
              }
            }}
          />
        </label>
      </div>
      {data?.query?.search?.map((result: resultType, index: Number) => (
        <SearchResult key={`index-${index}`} result={result} />
      ))}
    </div>
  );
};

export default SearchBar;
