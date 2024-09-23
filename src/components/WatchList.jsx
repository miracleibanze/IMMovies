import { useContext, useState } from "react";
import Section from "./design/Section";
import { AppContext } from "../App";
import MenuSvg from "./design/MenuSvg";
import Title from "./design/Title";
import { download, noVideo, playRect, shareSquare } from "../assets";
import Button from "./design/Button";
import ThumbsDown from "../assets/svgs/ThumbsDown";
import ThumbsUp from "../assets/svgs/ThumbsUp";

const WatchList = () => {
  const { movieList, handleRemoveMovie, dummyUserObject, toggleNotAvailable } =
    useContext(AppContext);

  const [currentMovie, setCurrentMovie] = useState(0);
  const [currentMovieImg, setCurrentMovieImg] = useState(noVideo);
  const [currentMovieName, setCurrentMovieName] = useState("");
  const [currentMovieDescription, setCurrentMovieDescription] = useState("");
  return (
    <Section id="watchlist" noPadding>
      <Title
        content="Your Watch List"
        span={`${dummyUserObject.names}:`}
        text="here is your collected movies, enjoy watching"
      />
      <div
        className={`relative w-full lg:px-8 lg:aspect-video container flex lg:flex-row flex-col gap-4 `}
      >
        <div className="lg:w-[75%] w-full">
          <div className="w-full aspect-video bg-slate-500">
            <div
              className={`w-full h-full ${
                currentMovie === 0 ? "bg-contain bg-no-repeat" : "bg-cover"
              } bg-center`}
              style={{ backgroundImage: `url(${currentMovieImg})` }}
            >
              <div
                className="relative bg-slate-950/50 w-full h-full flex items-center justify-center"
                onClick={toggleNotAvailable}
              >
                <img src={playRect} alt="play" className="h-12" />
              </div>
            </div>
          </div>
          <h3
            className={`h3 px-4 font-bold flex items-center justify-between w-full pointer-events-none ${
              currentMovie === 0 ? "hidden" : ""
            }`}
          >
            {currentMovieName}
            <span className="flex items-center gap-2">
              {" "}
              <button className={`w-6 -translate-y-1`}>
                <ThumbsUp fill="#60a5fa" />
              </button>
              <button className={`w-6 translate-y-1`}>
                <ThumbsDown fill="#60a5fa" />
              </button>
              <img
                src={shareSquare}
                alt="like"
                className="w-6"
                onClick={toggleNotAvailable}
              />
            </span>
          </h3>
          <p>{currentMovieDescription}</p>
          <div
            className={`w-full flex items-center p-4 gap-2 justify-end ${
              currentMovie === 0 ? "hidden" : ""
            }`}
          >
            <Button scale onClick={toggleNotAvailable}>
              <img src={download} alt="like" className="h-4" />
              Download
            </Button>
          </div>
        </div>
        <div className="relative flex-1 lg:p-0 px-8">
          <h4 className="h4 font-semibold">Watchlist :</h4>
          <div className="relative h-full lg:overflow-y-scroll scrollDesign">
            {movieList.map((item, itemIndex) => (
              <div
                className={`w-full px-4 py-2 rounded-md border-color-1 flex justify-between items-center shadow-md ${
                  itemIndex === currentMovie && currentMovie !== 0
                    ? "bg-color-1"
                    : ""
                } ${
                  itemIndex === 0 ? "opacity-0 pointer-events-none h-0" : ""
                }`}
                key={itemIndex}
              >
                <p
                  className="body-2 font-semibold flex-1"
                  onClick={() => {
                    setCurrentMovie(itemIndex);
                    setCurrentMovieImg(item.imgUrl);
                    setCurrentMovieName(item.name);
                    setCurrentMovieDescription(item.description);
                    window.scrollTo(0, 0);
                  }}
                >
                  {itemIndex}
                  {". "}
                  {item.name}
                </p>
                <div className="p-2" onClick={() => handleRemoveMovie(item.id)}>
                  <MenuSvg
                    openNavigation={true}
                    fill={itemIndex === currentMovie && "white"}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className={`absolute w-full h-full top-0  bg-slate-300 items-center justify-center ${
              movieList.length !== 1 ? "hidden" : "flex"
            }`}
            onClick={() => console.log(movieList.length)}
          >
            &lt;Empty&gt;
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WatchList;
