import { memo, useState } from "react";
import Section from "./design/Section";
import {
  allMovies,
  blogs,
  movieStars,
  ourMoviesGenre,
  randomMovies,
} from "./Constants";
import { ADoubleRightSvg, play } from "../assets";
import Button from "./design/Button";
import { useNavigate } from "react-router-dom";
import MovieCard from "./design/MovieCard";
import Heading from "./design/Heading";
import Title from "./design/Title";
import Overlay from "./design/Overlay";

const Hero = () => {
  const navigate = useNavigate();
  const [randomMoviePick, setRandomMoviePick] = useState(0);

  const [secondNextMovie, setSecondNextMovie] = useState(3);
  const [secondLastMovie, setSecondLastMovie] = useState(2);
  const [weekFilter, setWeekFilter] = useState(ourMoviesGenre[0]);

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
      <Section id="hero" noPadding className="w-screen">
        <div className="relative w-full flex justify-center">
          <div className="absolute left-0 right-0 z-10 h-full flex w-full flex-col justify-start ">
            <h1 className="lg:text-[5rem] px-4 leading-none md:text-[4rem] text-[3rem] font-extrabold text-white uppercase textShadow">
              {randomMovies[randomMoviePick].name}
            </h1>
          </div>
          <div
            className="relative lg:h-[45rem] md:h-[40rem] h-[35rem]  bg-black/50 w-full bg-above-center bg-cover flex justify-center items-end"
            style={{
              backgroundImage: `url(${randomMovies[randomMoviePick].imageUrl})`,
            }}
          >
            <div className="relative w-full flex justify-center bg-white/60 dark:bg-slate-900/80 pb-12">
              <p className="bg-slate-800 text-slate-50 lg:shadow-xl lg:shadow-black absolute bottom-full w-full px-4 py-2">
                {randomMovies[randomMoviePick].description}
              </p>
              <div className="lg:h-[33rem] md:h-[25rem] sm:h-[20rem] h-[15rem] w-full dimenssion relative flex items-center justify-center perspective z-10">
                <div
                  className="h-full relative aspect-[15/19] bg-cover bg-center border-4 border-color-1 shadow-2xl flex group items-center justify-center shadow-color-1"
                  style={{
                    backgroundImage: `url(${randomMovies[randomMoviePick].imageUrl})`,
                  }}
                  onClick={() =>
                    navigate(`/watch/${randomMovies[randomMoviePick].name}`)
                  }
                >
                  <img
                    loading="lazy"
                    src={ADoubleRightSvg}
                    className="h-6 absolute top-1/2 -right-2 -translate-y-1/2 translate-x-full animate-pulse"
                  />
                  <img
                    loading="lazy"
                    src={ADoubleRightSvg}
                    className="h-6 absolute top-1/2 -left-2 -translate-y-1/2  -translate-x-full animate-pulse rotate-180"
                  />
                  <img
                    loading="lazy"
                    src={play}
                    className="h-12 m-auto group-hover:flex hidden rounded-full bg-black border-color-1 border-8"
                    onClick={() =>
                      navigate(`/watch/${randomMovies[randomMoviePick].name}`)
                    }
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
      <Section id="allMovies">
        <div className="relative container">
          <Heading title="opening this week" />
          <div className="flex items-center flex-wrap w-full gap-1 mt-4">
            {ourMoviesGenre.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id != 6 && item.id != 7 && item.id != 8
                    ? "flex"
                    : "hidden"
                } rounded-md`}
              >
                <Button
                  hover={item.id != weekFilter.id ? true : false}
                  onClick={() => {
                    setWeekFilter(item);
                  }}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
          <div className="relative flex flex-no-wrap overflow-hidden items-start py-3 justify-start gap-3 mt-4">
            {weekFilter.id === 0 &&
              allMovies.map((item) => (
                <MovieCard
                  condition={item.id < 10}
                  key={item.id}
                  add
                  item={item}
                />
              ))}
            {weekFilter.id != 0 &&
              allMovies.map((item) => (
                <MovieCard
                  condition={
                    item.movieType.includes(
                      ourMoviesGenre[weekFilter.id].name
                    ) ||
                    (weekFilter.id === 9 &&
                      (item.movieType === "Sci-fi" ||
                        item.movieType === "Comedy" ||
                        item.movieType === "Serie"))
                  }
                  key={item.id}
                  add
                  item={item}
                />
              ))}
          </div>
          <div className="w-full py-4 flex justify-end">
            <Button
              onClick={() => {
                navigate(
                  weekFilter.id === 0
                    ? "/movies/All/movies"
                    : `/movies/${weekFilter.name}/all`
                );
              }}
              scale
            >
              See more{" "}
              {weekFilter.id === 0 ? "movies" : `${weekFilter.name} movies`}
            </Button>
          </div>
        </div>
      </Section>
      <Section id="topTen" color>
        <Heading title="top 10 on IMMovies" color />
        <div className="relative container">
          <div className="flex w-full items-center justify-start mt-4 gap-3 py-2 overflow-x-hidden">
            {allMovies.map((item) => (
              <MovieCard
                condition={item.topTen}
                key={item.id}
                add
                item={item}
              />
            ))}
          </div>
          <div className="w-full py-4 flex justify-end">
            <Button
              onClick={() => {
                navigate("/movies/topTen/movies");
              }}
              scale
            >
              See more
            </Button>
          </div>
        </div>
      </Section>
      <Section id="moreToWatch" noPadding>
        <Title
          content="More to watch"
          span="Top Picks:"
          text="TV shows and movies just for you"
        />
        <div className="container px-0 overflow-visible">
          <div className="flex justify-center gap-3 flex-nowrap overflow-visible py-2 ">
            {Array(8)
              .fill("")
              .map((item, index) => (
                <MovieCard
                  className="min-w-[15rem] h-[25rem] translate-x-1/3"
                  dynamic
                  item={allMovies[index + 24]}
                  condition={true}
                  key={index}
                />
              ))}
          </div>
          <div className="flex justify-center flex-nowrap gap-3 overflow-visible py-2">
            {Array(8)
              .fill("")
              .map((item, index) => (
                <MovieCard
                  className="min-w-[15rem] h-[25rem] -translate-x-1/3"
                  dynamic
                  item={allMovies[index + 11]}
                  condition={true}
                  key={index}
                />
              ))}
          </div>
        </div>
      </Section>
      <Section id="boxOffice" color>
        <Heading title="Box office" color />
        <div className="flex items-center justify-start gap-3 flex-no-wrap overflow-x-hidden w-full mt-4">
          {randomMovies.map((item) => (
            <div
              className="relative min-w-[15rem] h-[20rem] flex border bg-cover items-center justify-center bg-center font-medium shadow-black shadow-md group"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              key={item.id}
            >
              <Overlay name={item.name} />
            </div>
          ))}
        </div>
        <div className="w-full mt-4 flex place-content-end">
          <Button link="/trending/box-office">See more</Button>
        </div>
      </Section>
      <Section id="blog">
        <Heading title="Our Blog" />
        <div className="container relative flex flex-wrap items-center justify-start gap-4 px-2 py-4">
          {blogs.map((item) => (
            <div
              className="relative flex flex-col items-start justify-between w-[18rem] h-[24rem] p-2 border shadow-lg shadow-black"
              key={item.id}
            >
              <div
                className="w-full h-[10rem] border bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bgUrl})` }}
              />
              <div className="relative flex-1 pt-2">
                <h6 className="h6 font-bold dark:text-slate-100">
                  {item.title}
                </h6>
                <p className="body-2 text-color-t font-semibold">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  loading="lazy"
                  src={item.avatar}
                  alt="commenter"
                  className="w-12 aspect-square rounded-full border object-cover object-center"
                />
                <div className="relative flex-1 body-1">
                  <div className="font-semibold flex flex-col dark:text-slate-100 leading-5">
                    {item.commenter}
                    <span className="text-[70%] dark:text-slate-100 font-extralight">
                      {item.commenterAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full py-4 flex justify-end">
          <Button
            onClick={() => {
              navigate("/trending/blog");
            }}
            scale
          >
            Read more
          </Button>
        </div>
      </Section>
      <Section id="movieStars" color>
        <Heading title="Our Stars" color />
        <div className="container relative mt-4 flex items-center gap-4 overflow-hidden">
          {movieStars.map((item) => (
            <div
              className="relative h-auto flex flex-col items-center justify-between"
              key={item.id}
            >
              <img
                loading="lazy"
                src={item.avatar}
                alt="avatar"
                className="min-w-[10rem] max-w-[10rem] h-[15rem] rounded-3xl border object-cover object-center"
              />
              <p className="body-2 font-bold dark:text-slate-100">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full py-4 flex justify-end">
          <Button
            onClick={() => {
              navigate("/celebs");
            }}
            scale
          >
            See more
          </Button>
        </div>
      </Section>
    </>
  );
};

export default memo(Hero);
