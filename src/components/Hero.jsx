import { useContext, useState } from "react";
import Section from "./design/Section";
import { allMovies, ourMoviesGenre, randomMovies } from "./Constants";
import { ADoubleRightSvg, play } from "../assets";
import Button from "./design/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import MovieCard from "./design/MovieCard";
import Heading from "./design/Heading";

const Hero = () => {
  const { isLogged } = useContext(AppContext);

  const navigate = useNavigate();
  const [randomMoviePick, setRandomMoviePick] = useState(0);

  const [secondNextMovie, setSecondNextMovie] = useState(3);
  const [secondLastMovie, setSecondLastMovie] = useState(2);
  const [weekFilter, setWeekFilter] = useState(0);

  const isFirstMovie = randomMoviePick === 0;
  let isLastMovie = randomMoviePick === randomMovies.length - 1;

  const prevMovie = isFirstMovie
    ? randomMovies.length - 1
    : randomMoviePick - 1;
  const nextMovie = isLastMovie ? 0 : randomMoviePick + 1;

  const isNextLastMovie = randomMoviePick === randomMovies.length - 2;

  const togglePrevious = () => {
    setRandomMoviePick(prevMovie);
    setSecondLastMovie(nextMovie);
    setSecondNextMovie((prevCount) => {
      if (prevCount === 0) {
        return 5;
      } else {
        return prevCount - 1;
      }
    });
  };

  const toggleNext = () => {
    setRandomMoviePick(nextMovie);
    setSecondNextMovie(prevMovie);
    setSecondLastMovie((prevCount) => {
      if (prevCount === 5) {
        return 0;
      } else {
        return prevCount + 1;
      }
    });
  };

  return (
    <>
      <Section id="hero" className="px-0 pt-0 lg:pb-8 pb-4">
        <div className="relative bg-color-1 w-full flex justify-center">
          <div className="absolute left-0 lg:max-w-min  z-10 h-full flex w-full flex-col justify-start ">
            <h1 className="lg:text-[5rem] md:text-[4rem] text-[3rem] font-extrabold lg:w-max text-white uppercase textShadow">
              {randomMovies[randomMoviePick].name}
            </h1>
          </div>
          <div
            className="relative h-[40rem] bg-black/50  w-full bg-center bg-cover flex justify-center items-end"
            style={{
              backgroundImage: `url(${randomMovies[randomMoviePick].imageUrl})`,
            }}
          >
            <div className="relative w-full flex justify-center bg-white/60">
              <p className="bg-white lg:shadow-xl lg:shadow-black absolute bottom-full w-full px-4">
                {randomMovies[randomMoviePick].description}
              </p>
              <div className="lg:h-[30rem] md:h-[25rem] sm:h-[20rem] h-[15rem] w-full dimenssion relative border-t-8 border-color-1 flex items-center justify-center perspective z-10">
                <div
                  className="h-full relative aspect-[15/18] bg-cover bg-center border-color-1 shadow-2xl flex group items-center justify-center shadow-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[randomMoviePick].imageUrl})`,
                  }}
                >
                  <img
                    src={ADoubleRightSvg}
                    className="h-6 absolute top-1/2 -right-2 -translate-y-1/2 translate-x-full animate-pulse"
                  />
                  <img
                    src={ADoubleRightSvg}
                    className="h-6 absolute top-1/2 -left-2 -translate-y-1/2  -translate-x-full animate-pulse rotate-180"
                  />
                  <img
                    src={play}
                    className="h-12 m-auto group-hover:flex hidden animate-pulse"
                  />
                </div>
                <div
                  className="absolute origin-right bg-cover bg-center rotateR h-full aspect-[15/18] border border-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[prevMovie].imageUrl})`,
                  }}
                  onClick={togglePrevious}
                >
                  <div className="absolute h-full w-10 -left-16 bg-gradient-to-br from-black to-green-400" />
                </div>
                <div
                  className="absolute h-full origin-left bg-cover bg-center rotateL aspect-[15/18] border border-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[nextMovie].imageUrl})`,
                  }}
                  onClick={toggleNext}
                >
                  <div className="absolute h-full w-10 -right-16 bg-gradient-to-bl from-black to-yellow-400" />
                </div>

                <div
                  className="absolute bg-cover bg-center h-full aspect-[15/18] scale-[.6] -translate-x-[140%] border border-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[secondNextMovie].imageUrl})`,
                  }}
                  onClick={togglePrevious}
                />
                <div
                  className="absolute bg-cover bg-center h-full aspect-[15/18] scale-[.6] translate-x-[140%] border border-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[secondLastMovie].imageUrl})`,
                  }}
                  onClick={toggleNext}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section color>
        <div className="relative container">
          <Heading title="opening this week" color />
          <div className="flex items-center flex-wrap w-full gap-1 mt-4">
            {ourMoviesGenre.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id != 6 ? "flex" : "hidden"
                } bg-slate-100 rounded-md`}
              >
                <Button
                  hover={item.id != weekFilter ? true : false}
                  onClick={() => {
                    setWeekFilter(item.id);
                    console.log(item.id);
                    console.log(item.name);
                  }}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
          <div className="relative flex flex-wrap items-start justify-start gap-3 mt-4">
            {weekFilter === 0 &&
              allMovies.map((item) => (
                <MovieCard
                  condition={item.id < 16}
                  backgroundImage={item.imgUrl}
                  name={item.name}
                  movieType={item.movieType}
                  key={item.id}
                />
              ))}
            {weekFilter != 0 &&
              allMovies.map((item) => (
                <MovieCard
                  condition={
                    item.movieType === ourMoviesGenre[weekFilter].name ||
                    (weekFilter === 7 &&
                      (item.movieType === "Sci-fi" ||
                        item.movieType === "Comedy" ||
                        item.movieType === "Serie"))
                  }
                  key={item.id}
                  backgroundImage={item.imgUrl}
                  name={item.name}
                  movieType={item.movieType}
                />
              ))}
          </div>
          <div className="w-full py-4 flex justify-end">
            <Button onClick={() => navigate("/movies")} scale>
              See more
            </Button>
          </div>
        </div>
      </Section>
      <Section>
        <Heading title="top 10 on IMMovies" />
        <div className="relative container">
          <div className="flex w-full items-center justify-start mt-4 gap-3 flex-wrap">
            {allMovies.map((item) => (
              <MovieCard
                condition={item.topTen}
                name={item.name}
                movieType={item.movieType}
                backgroundImage={item.imgUrl}
                key={item.id}
              />
            ))}
          </div>
          <div className="w-full py-4 flex justify-end">
            <Button onClick={() => navigate("/movies#topTen")} scale>
              See more
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
