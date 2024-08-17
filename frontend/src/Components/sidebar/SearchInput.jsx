import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Find Friend"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-yellow-400 text-black">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
