import { useNavigate, useParams } from "react-router-dom";
import Section from "./design/Section";
import { allMovies } from "./Constants";
import { download, play, playRect, shareSquare, user } from "../assets";
import Button from "./design/Button";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import ThumbsUp from "../assets/svgs/ThumbsUp";
import ThumbsDown from "../assets/svgs/ThumbsDown";

const Watch = () => {
  const navigate = useNavigate();
  const { movie } = useParams();

  const { isLogged, handleAddWatchlist, toggleNotAvailable } =
    useContext(AppContext);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  const toggleDisLiked = () => {
    setDisLiked(!disLiked);
  };

  return (
    <Section id="Watch" noPadding className="px-4">
      <div className="container relative">
        {allMovies.map((item) => (
          <div
            className={`w-full ${
              item.name === movie ? "flex" : "hidden"
            } lg:flex-row flex-col`}
            key={item.id}
          >
            <div className="lg:w-[75%] w-full flex flex-col items-start gap-3">
              <div
                className={`w-full aspect-video border bg-cover bg-center `}
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                <div
                  className="relative bg-slate-950/50 w-full h-full flex items-center justify-center"
                  onClick={toggleNotAvailable}
                >
                  <img src={playRect} alt="play" className="h-12" />
                </div>
              </div>
              <h3 className="h3 px-4 font-bold flex items-center justify-between w-full">
                {item.name}
                <span className="flex items-center gap-2">
                  <span className="body-2 font-semibold text-slate-500">
                    {item.likes ? item.likes : (item.likes = 0)}%
                  </span>
                  <button
                    className={`w-6 -translate-y-1`}
                    onClick={() => {
                      if (!liked) {
                        item.likes = item.likes + 1;
                        toggleLiked();
                      } else {
                        item.likes = item.likes - 1;
                        toggleLiked();
                      }
                      console.log(item.likes);
                    }}
                  >
                    <ThumbsUp fill={!liked ? "#808080ed" : "#60a5fa"} />
                  </button>
                  <span className="body-2 font-semibold text-slate-500">
                    {item.disLikes ? item.disLikes : (item.disLikes = 0)}%
                  </span>
                  <button
                    className={`w-6 translate-y-1`}
                    onClick={() => {
                      if (!disLiked) {
                        item.disLikes = item.disLikes + 1;
                        toggleDisLiked();
                      } else {
                        item.disLikes = item.disLikes - 1;
                        toggleDisLiked();
                      }
                      console.log(item.disLikes);
                    }}
                  >
                    <ThumbsDown fill={!disLiked ? "#808080ed" : "#60a5fa"} />
                  </button>

                  <img
                    src={shareSquare}
                    alt="like"
                    className="w-6"
                    onClick={toggleNotAvailable}
                  />
                </span>
              </h3>
              <p className="body-2">{item.description}</p>
              <div className="w-full flex items-center p-4 gap-2 justify-end">
                <a onClick={toggleNotAvailable}>
                  <Button scale>
                    <img src={download} alt="like" className="h-4" />
                    Download
                  </Button>
                </a>
                <Button
                  scale
                  onClick={() => {
                    if (isLogged != false) {
                      handleAddWatchlist(item);
                    } else {
                      alert("Must login first, to have a watchlist");
                    }
                    if (addedToWatchList) {
                      alert("Already in watchList !");
                    } else {
                      setAddedToWatchList(true);
                    }
                  }}
                >
                  {!addedToWatchList ? "Add to WatchList" : "Movie added"}
                </Button>
              </div>
              <div className="relative w-full flex items-center gap-2 mb-8">
                <img
                  src={user}
                  alt="person"
                  className="w-12 aspect-square rounded-full border object-cover object-center mx-4"
                />
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  className="flex-1 h-11 rounded-md px-2 outline-none"
                  placeholder="Write your comment..."
                />
                <Button scale>Comment</Button>
              </div>
            </div>
            <div className="relative flex-1 bg-slate-300 lg:ml-4 max-lg:mt-12">
              <h5 className="h5 leading-none mb-4 m-2">More related movies</h5>
              <div className=" p-2  lg:overflow-y-scroll lg:overflow-x-hidden overflow-y-hidden scrollDesign max-h-[50rem] overflow-x-scroll">
                <div className="flex lg:flex-col-reverse lg:w-full flex-row-reverse gap-2 w-max max-lg">
                  {allMovies.map((itemb) => (
                    <div
                      className={`relative ${
                        item.id > allMovies.length - 10
                          ? `${
                              itemb.id > item.id || itemb.id < 10
                                ? "flex"
                                : "hidden "
                            }`
                          : `${
                              itemb.id > item.id && itemb.id < item.id + 10
                                ? "flex"
                                : "hidden"
                            }`
                      } flex-col lg:w-full min-w-[15rem] h-auto p-2`}
                      onClick={() => {
                        navigate(`/watch/${itemb.name}`);
                        setAddedToWatchList(false);
                        setDisLiked(false);
                        setLiked(false);
                        window.scrollTo(top);
                      }}
                      key={itemb.id}
                    >
                      <div
                        className="w-full aspect-video bg-cover bg-slate-400 rounded-md bg-center group"
                        style={{ backgroundImage: `url(${itemb.imgUrl})` }}
                      >
                        <div className="w-full flex justify-center aspect-video items-center">
                          <img
                            src={play}
                            className="w-8 group-hover:flex hidden"
                          />
                        </div>
                      </div>
                      <div className="w-full body-2 font-semibold p-2">
                        {itemb.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex pt-4 justify-center lg:justify-end">
                <Button hover onClick={() => navigate("/movie")}>
                  more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Watch;
