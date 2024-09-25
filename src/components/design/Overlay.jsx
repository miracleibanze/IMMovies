import { memo, useContext } from "react";
import { AppContext } from "../../App";
import { play } from "../../assets";
import { useNavigate } from "react-router-dom";

const Overlay = ({ name, movieType }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute w-full h-full backdrop-brightness-50 animate-inward group-hover:flex hidden item-center justify-center place-content-center">
      <div className="flex items-center w-full h-full justify-center">
        <div className="relative flex justify-center items-center text-slate-50 flex-col w-full px-2">
          <div className="w-full h-full">
            {name}
            <div className="bgLine pb-1" />
            {movieType && movieType}
          </div>
          <span className="flex items-center text-3xl mt-2">
            <img
              onClick={() => {
                navigate(`/watch/${name}`);
                window.scrollTo(top);
              }}
              src={play}
              alt="play"
              className="w-8 h-8 border-slate-300 border-4 hover:scale-[1.2] rounded-full shadow-2xl shadow-slate-200"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Overlay);
