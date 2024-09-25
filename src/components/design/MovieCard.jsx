import { memo, useContext, useState } from "react";
import { threeDots } from "../../assets";
import Overlay from "./Overlay";
import { AppContext } from "../../App";

const MovieCard = ({
  condition,
  backgroundImage,
  name,
  movieType,
  className,
  dynamic,
  item,
}) => {
  const { handleAddWatchlist, toggleNotAvailable } = useContext(AppContext);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const card = (
    <>
      <div
        className={`${
          condition ? "flex" : "hidden"
        } min-w-[10rem] max-w-[10rem] flex-col font-medium shadow-black shadow-md ${
          className && className
        }`}
      >
        <div
          className={`h-[15rem] w-full relative border bg-cover bg-center group flex items-center justify-center`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Overlay name={name} add movieType={movieType} />
        </div>
        <div className="w-full bg-slate-100 text-slate-700 h-[3.5rem] p-1 flex relative">
          <p>{name}</p>
          <span className="absolute bottom-0 p-1 group right-0 text-color-t">
            <img
              src={threeDots}
              alt="shortMenu"
              className="relative h-8 pb-2 "
            />
            <ul
              className={` group-hover:flex hidden absolute w-max right-0 bottom-full h-auto flex-col justify-start bg-white z-[999]`}
            >
              <li
                className="hover:bg-slate-200 border-b p-4"
                onClick={() => {
                  if (addedToWatchList) {
                    alert("Already in WatchList");
                  } else {
                    handleAddWatchlist(item);
                    setAddedToWatchList(true);
                  }
                }}
              >
                {!addedToWatchList ? "Add to watchList" : "Movie Added"}
              </li>
              <li
                className="hover:bg-slate-200 p-4"
                onClick={toggleNotAvailable}
              >
                Download
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );

  const card2 = (
    <>
      <div
        className={`flex w-[10rem] flex-col font-medium shadow-black shadow-md ${
          className && className
        }`}
      >
        <div
          className={`flex-1 w-full relative border bg-cover bg-center group flex items-center justify-center`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Overlay name={name} add movieType={movieType} />
        </div>
        <div className="w-full bg-slate-100 text-slate-700 h-[3.5rem] p-1 flex relative">
          <p>{name}</p>
          <span className="absolute bottom-0 p-1 right-0 group text-color-t">
            <img
              src={threeDots}
              alt="shortMenu"
              className="relative h-8 pb-2"
            />
            <ul
              className={`group-hover:flex hidden absolute w-max right-0 bottom-full h-auto flex-col justify-start bg-white z-[999]`}
            >
              <li
                className="hover:bg-slate-200 border-b p-4"
                onClick={() => {
                  if (addedToWatchList) {
                    alert("Already in WatchList");
                  } else {
                    handleAddWatchlist(item);
                    setAddedToWatchList(true);
                  }
                }}
              >
                {!addedToWatchList ? "Add to watchList" : "Movie Added"}
              </li>
              <li className="hover:bg-slate-200 p-4">Download</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
  return dynamic ? card2 : card;
};

export default memo(MovieCard);
