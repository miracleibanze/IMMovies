import { memo, useEffect, useState } from "react";
import { chevronUpDown, searchSvg } from "../assets";
import Title from "./design/Title";
import { ourMoviesGenre, topTen } from "./Constants";

const Search = () => {
  const [moviePage, setMoviePage] = useState(0);
  const [currentfilterGenre, setCurrentFilterGenre] = useState(
    ourMoviesGenre[0]
  );
  const [selectCategory, setSelectCategory] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText((prevSearch) => {
      return {
        ...prevSearch,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    console.log(currentfilterGenre.name);
  }, [location]);

  const toggleSelectCategory = () => {
    setSelectCategory(!selectCategory);
  };
  return (
    <>
      <div className="flex justify-center flex-col py-8 bg-slate-300">
        <Title content={"search you favourites"} />
        <div className="flex place-content-center gap-2">
          <input
            type="text"
            placeholder="Search your favorites..."
            name="search"
            className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]"
            onChange={handleSearch}
          />
          <img
            src={searchSvg}
            alt="search"
            className="h-10 border border-color-1 p-2 rounded-md hover:scale-[1.1] duration-300 block"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full relative">
        <div className="relative flex gap-2 items-start justify-center  min-h-full bg-slate-300 p-2 lg:w-max w-full">
          <div className="flex items-center gap-2">
            <label htmlFor="Category" className="body-1">
              filter :{" "}
            </label>
            <div className="relative w-[11rem] px-4 py-2 rounded-md bg-white">
              <p
                className="body-2 font-semibold flex-1 flex items-center justify-between"
                onClick={toggleSelectCategory}
              >
                {currentfilterGenre.name}
                <img
                  src={chevronUpDown}
                  className="h-8 translate-x-2 rounded-md bg-slate-300"
                />
              </p>
              <div
                className={`absolute top-full left-0 bg-white z-10 py-2 px-6 min-w-full h-max ${
                  selectCategory ? "flex" : "hidden"
                }`}
              >
                <div className="flex flex-col gap-[0.0625rem] bg-slate-500">
                  {ourMoviesGenre.map((item, itemIndex) => (
                    <div
                      className={`w-full px-8 py-2 hover:bg-slate-400 duration-300 bg-white  ${
                        item.id === 9 ? "hidden" : ""
                      } ${
                        item.name === currentfilterGenre.name ? "hidden" : ""
                      }`}
                      onClick={() => {
                        toggleSelectCategory();
                        navigate(
                          item.id === 0
                            ? `/movies/${item.name}/movies`
                            : `/movies/${item.name}/all`
                        );
                      }}
                      key={itemIndex}
                    >
                      {item.name}
                    </div>
                  ))}
                  <div
                    className={`w-full px-8 py-2 hover:bg-slate-400 duration-300 bg-white  ${
                      currentfilterGenre.name === topTen.name ? "hidden" : ""
                    }`}
                    onClick={() => {
                      toggleSelectCategory();
                      navigate(`/movies/${topTen.link}/movies`);
                    }}
                  >
                    {topTen.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 min-h-[20rem] flex-1">
          <h3 className="px-8 h3">
            Results for:{" "}
            <span className="font-bold">"{searchText.search}"</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default memo(Search);
