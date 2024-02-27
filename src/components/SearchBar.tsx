import React from "react";
import { CiSearch } from "react-icons/ci";


type Props = {
  search: string;
  setSearch: Function;
};

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className=" flex p-4 rounded-full shadow-md items-center gap-2 bg-white w-96">
      <CiSearch className=" text-2xl text-gray-400" />
      <input
        type="text"
        className=" outline-none flex-1"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
