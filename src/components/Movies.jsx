import Title from "./design/Title";
import Section from "./design/Section";
import { allMovies, ourMoviesGenre } from "./Constants";
import MovieCard from "./design/MovieCard";
import { useState } from "react";
import { chevronUpDown } from "../assets";
import Button from "./design/Button";

const Movies = () => {
  const [selectFilter, setSelectFilter] = useState(0);
  const [moviePage, setMoviePage] = useState(0);
  const [currentfilterGenre, setCurrentFilterGenre] = useState(
    ourMoviesGenre[0]
  );
  const [selectCategory, setSelectCategory] = useState(false);

  const toggleSelectCategory = () => {
    setSelectCategory(!selectCategory);
  };
  const Welcome = (
    <>
      <div className="relative body-2 font-semibold">
        Watch and enjoy on <span className="text-color-t">IM</span>Movies
      </div>
    </>
  );

  return (
    <Section id="movies" color className="pb-32">
      <Title content="Movies" text={Welcome} />
      <div className="container relative font-semibold">
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="Category">Category : </label>
          <div className="relative w-[10rem] px-4 py-2 rounded-md bg-white">
            <p
              className="body-2 font-semibold flex items-center justify-between"
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
                    } ${item.name === currentfilterGenre.name ? "hidden" : ""}`}
                    onClick={() => {
                      toggleSelectCategory();
                      setCurrentFilterGenre(item);
                      window.scrollTo(top);
                    }}
                    key={itemIndex}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bgLine w-full h-1 my-4" />
      </div>
      <div className="relative w-full flex justify-center min-h-10">
        <div
          className={` sm:w-max w-full 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative overflow-hidden gap-4 ${
            currentfilterGenre.id === 0 ? "grid" : "hidden"
          }`}
        >
          {allMovies.map((item) => (
            <MovieCard
              name={item.name}
              movieType={item.movieType}
              item={item}
              backgroundImage={item.imgUrl}
              key={item.id}
              condition={true}
              dynamic
              className={`sm:w-[13rem] w-full h-[20rem]
                  ${
                    (item.id > 17 && moviePage === 0) ||
                    ((item.id <= 17 || item.id > 35) && moviePage === 1) ||
                    (item.id <= 35 && moviePage === 2)
                      ? "2xl:hidden"
                      : ""
                  }  ${
                (item.id > 19 && moviePage === 0) ||
                ((item.id <= 19 || item.id > 34) && moviePage === 1) ||
                (item.id <= 34 && moviePage === 2)
                  ? "max-2xl:xl:hidden"
                  : ""
              }
                ${
                  (item.id > 15 && moviePage === 0) ||
                  ((item.id <= 15 || item.id > 31) && moviePage === 1) ||
                  (item.id <= 31 && moviePage === 2)
                    ? "max-xl:lg:hidden"
                    : ""
                } ${
                (item.id > 14 && moviePage === 0) ||
                ((item.id <= 14 || item.id > 26) && moviePage === 1) ||
                (item.id <= 26 && moviePage === 2)
                  ? "max-lg:md:hidden"
                  : ""
              } ${
                (item.id > 15 && moviePage === 0) ||
                ((item.id <= 15 || item.id > 27) && moviePage === 1) ||
                (item.id <= 27 && moviePage === 2)
                  ? "max-md:sm:hidden"
                  : ""
              } ${
                (item.id > 13 && moviePage === 0) ||
                ((item.id <= 13 || item.id > 30) && moviePage === 1) ||
                (item.id <= 30 && moviePage === 2)
                  ? "max-sm:hidden"
                  : ""
              }
                
                   `}
            />
          ))}
        </div>

        {currentfilterGenre !== 0 && (
          <div className="grid  w-max 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative gap-4">
            {allMovies.map((item) => (
              <MovieCard
                name={item.name}
                movieType={item.movieType}
                item={item}
                backgroundImage={item.imgUrl}
                key={item.id}
                condition={item.movieType === currentfilterGenre.name}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className={`absolute bottom-8 w-full ${
          currentfilterGenre.id === 0 ? "flex" : "hidden"
        }  items-center justify-center gap-2`}
      >
        <Button
          hover={moviePage === 0 ? false : true}
          onClick={() => {
            setMoviePage(0);
            window.scrollTo(top);
          }}
        >
          1
        </Button>
        <Button
          hover={moviePage === 1 ? false : true}
          onClick={() => {
            setMoviePage(1);
            window.scrollTo(top);
          }}
        >
          2
        </Button>
        <Button
          hover={moviePage === 2 ? false : true}
          onClick={() => {
            setMoviePage(2);
            window.scrollTo(top);
          }}
        >
          3
        </Button>
      </div>
    </Section>
  );
};

export default Movies;
