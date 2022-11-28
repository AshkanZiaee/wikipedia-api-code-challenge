import { resolveTxt } from "dns";
import React from "react";
import { resourceLimits } from "worker_threads";
import parser from "react-html-parser";
import Link from "next/link";
import { resultType } from "./SearchBar";

const SearchResult = ({ result }: resultType) => {
  const wikipediaLink = `https://en.wikipedia.org/wiki/${result.title}`;
  return (
    <div className="m-5 border shadow-md w-full">
      <div className="w-full h-20 flex items-center bg-gray-200 border-b ">
        <Link className="font-bold text-cyan-500 p-8" href={wikipediaLink}>
          <h3>{result.title}</h3>
        </Link>
      </div>
      <div className="flex items-center h-20 w-fit">
        <div className="p-5">{parser(result.snippet)}</div>
      </div>
    </div>
  );
};

export default SearchResult;
