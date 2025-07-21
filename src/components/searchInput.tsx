"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (search.trim()) {
        router.push(`?search=${encodeURIComponent(search)}`);
      } else {
        router.push("/");
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search, router]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <input
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        className="border text-white bg-[#101828] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Search for movies..."
        required
      />
    </div>
  );
};

export default SearchInput;
