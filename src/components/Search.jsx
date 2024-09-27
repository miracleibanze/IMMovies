import { memo, useCallback, useEffect, useState, useTransition } from "react";
import { chevronUpDown, searchSvg } from "../assets";
import Title from "./design/Title";
import { allMovies, ourMoviesGenre, topTen } from "./Constants";
import MovieCard from "./design/MovieCard";
import { useNavigate, useParams } from "react-router-dom";
import Section from "./design/Section";
import Heading from "./design/Heading";

const Search = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [moviePage, setMoviePage] = useState(0);
  const [currentfilterGenre, setCurrentFilterGenre] = useState(
    ourMoviesGenre[0]
  );
  const [selectCategory, setSelectCategory] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [showResults, setShowResults] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSearch = ({ target: { value } }) => {
    setSearchText(value);
  };
  const handleSearchText = (text) => {
    const Text = text.toLowerCase();
    startTransition(() => {
      setFilteredMovies(
        allMovies.filter((item) => {
          let lowerCase = item.name.toLowerCase();
          return lowerCase.includes(Text) && item;
        })
      );
    });
  };

  const toggleSelectCategory = () => {
    setSelectCategory(!selectCategory);
  };
  useEffect(() => {
    if (searchText !== "") {
      setShowResults(true);
      handleSearchText(searchText);
    }
    if (selectCategory) setSelectCategory(false);
  }, [searchText]);
  useEffect(() => {
    ourMoviesGenre.map((item, index) => {
      if (item.name === type) {
        setCurrentFilterGenre(ourMoviesGenre[index]);
      }
    });
  }, [location, selectCategory]);

  return (
    <>
      <div className="flex justify-center flex-col py-8 bg-slate-300 dark:bg-slate-800">
        <Title content={"search you favourites"} />
        <div className="flex place-content-center gap-2">
          <input
            type="text"
            placeholder="Search your favorites..."
            name="search"
            className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] dark:text-slate-200 "
            onChange={handleSearch}
          />
          <img
            loading="lazy"
            src={searchSvg}
            alt="search"
            className="h-10 border border-color-1 p-2 rounded-md hover:scale-[1.1] duration-300 block"
            onClick={handleSearchText}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full relative flex-1">
        <div className="relative flex gap-2 items-start justify-center  min-h-full bg-slate-300 dark:bg-slate-800 p-2 lg:w-max w-full">
          <>
            <p className="body-1 py-2 dark:text-slate-200">filter : </p>
            <div className="relative w-[11rem] px-4 py-2 rounded-md bg-white dark:bg-slate-500/50">
              <p
                className="body-2 font-semibold flex-1 flex items-center justify-between"
                onClick={toggleSelectCategory}
              >
                {currentfilterGenre.name}
                <img
                  loading="lazy"
                  src={chevronUpDown}
                  className="h-8 translate-x-2 rounded-md bg-slate-300"
                />
              </p>
              <div
                className={`absolute top-full left-0 bg-white z-[20] py-2 px-6 min-w-full min-h-max ${
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
                        navigate(`/search/${item.name}/movies`);
                      }}
                      key={itemIndex}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </div>
        <div className="relative flex-1 min-h-[20rem]">
          <div className="absolute bg-slate-100 dark:bg-slate-800 dark:text-slate-200 body-1 inset-0 flex items-center justify-center">
            No {currentfilterGenre.name !== "All" && currentfilterGenre.name}{" "}
            movie match your search "{searchText}", try search again
          </div>
          <h3 className="relative px-8 h3 z-10 dark:text-slate-200 ">
            Results for:{" "}
            <span className="font-bold dark:text-slate-200 ">
              "{searchText}"
            </span>
          </h3>
          <div
            className={`container relative z-10 ${
              showResults ? "flex" : "hidden"
            }  place-content-start flex-wrap w-full bg-slate-100  dark:bg-slate-800 dark:text-slate-200 gap-2 p-2`}
          >
            {filteredMovies.map((item, itemIndex) => (
              <div className={`w-max mb-4  `} key={itemIndex}>
                <MovieCard
                  className="w-[15rem] max-h-[25rem]"
                  condition={
                    item.movieType === currentfilterGenre.name ||
                    currentfilterGenre.name === "All"
                  }
                  item={item}
                />
              </div>
            ))}
          </div>
          {!showResults && (
            <div className="flex absolute z-5 body-1 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 inset-0 place-content-center items-center">
              Your search appears here
            </div>
          )}
        </div>
      </div>
      <Section className="px-8 py-4">
        <Heading title="Suggested" />
        <div className="py-4 flex overflow-x-scroll scrollDesign w-full gap-6">
          {allMovies.map((item, index) => (
            <MovieCard
              condition={item.suggested === true}
              item={item}
              key={index}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default memo(Search);
