import { useContext } from "react";
import { play } from "../../assets";
import { AppContext } from "../../App";

const MovieCard = ({ condition, backgroundImage, name, movieType }) => {
  const { isLogged } = useContext(AppContext);
  return (
    <div
      className={`flex w-[10rem] flex-col  font-medium shadow-black shadow-md ${
        condition ? "flex" : "hidden"
      } font-medium shadow-black shadow-md`}
    >
      <div
        className={`h-[15rem] w-full relative border bg-cover bg-center group flex items-center justify-center`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full backdrop-brightness-50 animate-inward group-hover:flex hidden item-center justify-center place-content-center">
          <div className="flex items-center w-full h-full justify-center">
            <div className="relative flex justify-center items-center text-slate-50 flex-col w-full px-2">
              <div className="w-full h-full">
                {name}
                <div className="bgLine pb-1" />
              </div>
              <span className="flex items-center text-3xl">
                <span>+</span>
                <img
                  onClick={() => {
                    if (isLogged) {
                      alert("dded to Watch list !");
                    }
                  }}
                  src={play}
                  alt="play"
                  className="w-8 h-8 border-slate-300 border-4 hover:scale-[1.2] rounded-full shadow-2xl shadow-slate-200"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 text-slate-700 h-[3.5rem] p-1 flex relative">
        <p>{name}</p>
        <span className="absolute bottom-0 p-1 right-0 text-color-t">
          {movieType}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
