import { useContext } from "react";
import { AppContext } from "../App";
import { searchSvg } from "../assets";

const Search = () => {
  return (
    <div className="flex justify-center py-8 bg-slate-100">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search your favorites..."
          className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]"
        />
        <img
          src={searchSvg}
          alt="search"
          className="h-10 border border-color-1 p-2 rounded-md hover:scale-[1.1] duration-300 block"
          onClick={() => navigate("/search")}
        />
      </div>
    </div>
  );
};

export default Search;
