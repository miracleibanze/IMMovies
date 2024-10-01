import Button from "./design/Button";
import { gripSvg, logo, searchSvg, starSvg, user } from "./../assets";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSvg from "./design/MenuSvg";
import { goUp, navMenu } from "./Constants";
import { memo } from "react";

const Navbar = ({
  openNavigation,
  setOpenNavigation,
  isLogged,
  dummyUserObject,
}) => {
  const navigate = useNavigate();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const menuContent = (
    <>
      <div
        className={` ${
          openNavigation ? "animate-fade-in" : "hidden"
        } lg:hidden absolute -z-[100] right-0 left-0 top-[3.4rem] overflow-hidden backdrop-blur-md`}
      >
        <div className="lg:hidden">
          <div
            className={`${
              openNavigation ? "animate-menu" : "hidden"
            } relative  w-full bg-slate-200 dark:bg-slate-900 dark:text-slate-100 flex flex-col items-start justify-evenly  pt-24 px-8  `}
          >
            {navMenu.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer hover:bg-color-1 dark:text-slate-100 pl-12 w-full h-12 flex items-center hover:scale-[1.05] duration-500 ${
                  item.id != 0 ? "border-t border-color-1" : ""
                }`}
                onClick={() => {
                  navigate(item.navigateLink);
                  toggleNavigation();
                }}
              >
                {item.name}
              </div>
            ))}
            <div
              className={`cursor-pointer hover:bg-color-1 pl-12 w-full h-12 dark:text-slate-100 flex items-center hover:scale-[1.05] duration-500 border-t border-color-1`}
              onClick={() => {
                navigate("./search");
                toggleNavigation();
              }}
            >
              Search
            </div>
            <div
              className={`cursor-pointer hover:bg-color-1 pl-12 w-full dark:text-slate-100 h-12 flex items-center hover:scale-[1.05] duration-500 border-t border-color-1
          `}
              onClick={() => {
                navigate("/watch_list");
                toggleNavigation();
              }}
            >
              Watch List
            </div>
            <div
              className={`cursor-pointer hover:bg-color-1 pl-12 dark:text-slate-100 w-full h-12 flex items-center hover:scale-[1.05] duration-500 border-t border-color-1 ${
                isLogged ? "hidden" : "flex"
              }`}
              onClick={() => {
                navigate("/sign_in");
                toggleNavigation();
              }}
            >
              Sign In
            </div>
            <img
              loading="lazy"
              src={gripSvg}
              className="h-6 mx-auto mt-20 mb-2"
              onClick={toggleNavigation}
            />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <header className="fixed z-[999] top-0 w-full bg-slate-100 dark:bg-slate-900 shadow flex place-content-center">
      <nav className=" w-full h-[3.4rem] max-w-screen-2xl  py-2 px-8 flex justify-between items-center">
        <img
          loading="lazy"
          src={logo}
          width={830}
          height={170}
          className="md:h-10 w-auto h-8 "
          onClick={() => navigate("/")}
        />
        <div className="h-full lg:flex hidden  items-center font-bold justify-center space-x-4">
          {navMenu.map((item) => (
            <div
              key={item.id}
              className="body-2 text-color-t dark:text-blue-200 font-normal cursor-pointer hover:underline hover:scale-[1.15] duration-500"
              onClick={() => navigate(item.navigateLink)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="lg:flex hidden items-center gap-2 ">
          <img
            loading="lazy"
            src={searchSvg}
            alt="search"
            className={`h-10 border border-color-1 p-2 rounded-md hover:scale-[1.1] duration-300 block`}
            onClick={() => navigate("/search/All/movies")}
          />
          <Button className="gap-2" hover link={"/watch_list"} onClick={goUp}>
            <img loading="lazy" src={starSvg} className="h-4 mr-0" />
            Watch list
          </Button>
          {!isLogged && (
            <Button link="sign_in/auth" onClick={goUp}>
              Sign in
            </Button>
          )}

          <div
            className={`${
              isLogged ? "flex" : "hidden"
            } h-[2.7rem] aspect-square `}
            onClick={() => navigate("/profile")}
          >
            <div
              className="h-full w-full border bg-slate-400 border-slate-300 rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${user})` }}
            >
              {dummyUserObject.imgUrl && (
                <div
                  style={{ backgroundImage: `url(${dummyUserObject.imgUrl})` }}
                  className="h-full w-full rounded-full bg-slate-700 p-[0.2rem] bg-center bg-cover"
                />
              )}
            </div>
          </div>
        </div>
        <div className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </div>
        {menuContent}
      </nav>
      <Outlet />
    </header>
  );
};

export default memo(Navbar);
