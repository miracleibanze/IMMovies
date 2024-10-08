import {
  designerSocials,
  footerQuickLinks,
  goUp,
  ourMoviesGenre,
} from "./Constants";
import { Link, useNavigate } from "react-router-dom";
import { ADoubleRightSvg, copyRightSvg, deadPool } from "../assets";
import { memo } from "react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${deadPool})` }}
      className="bg-contain lg:bg-left-top bg-center"
    >
      <div className="flex items-start flex-wrap justify-evenly py-6 lg:footer-bg dark:lg:footer-bg-black  bg-slate-300 dark:max-lg:bg-slate-900 lg:pl-24 p-8">
        <div className="lg:w-1/3 w-full lg:mb-0 mb-4">
          <h4 className="h4 font-semibold font-press dark:text-slate-100">
            IMMovies
          </h4>
          <p className="dark:text-slate-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            labore architecto non doloribus sequi fuga?
          </p>
          <div className="flex items-center gap-4 mt-3 ml-4">
            {designerSocials.map((item) => (
              <a
                href={item.linkUrl}
                key={item.name}
                className="hover:scale-[1.2] dark:bg-slate-100/70"
              >
                {" "}
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="h-6 border"
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h6 className="h6 dark:text-slate-100">USEFULL LINKS</h6>
          {footerQuickLinks.map((item) => (
            <Link
              to={item.navigateLink}
              className="flex items-center gap-2 dark:text-slate-100"
              key={item.id}
              onClick={goUp}
            >
              <img src={ADoubleRightSvg} className="h-4 dark:bg-slate-100/40" />
              {item.name}
            </Link>
          ))}
        </div>
        <Link to={"/movies"} onClick={goUp}>
          <h6 className="h6 dark:text-slate-100">OUR MOVIES</h6>
          {ourMoviesGenre.map((item) => (
            <span
              className={`${
                item.id != 0 && item.id != 6 && item.id != 3 ? "flex" : "hidden"
              } items-center gap-2 dark:text-slate-100 `}
              key={item.id}
            >
              <img src={ADoubleRightSvg} className="h-4 dark:bg-slate-100/40" />
              {item.name}
            </span>
          ))}
        </Link>
        <div>
          <h6 className="h6 dark:text-slate-100">CONTACT US</h6>
          <p className=" dark:text-slate-100">IBANZE Miracle</p>
          <p className=" dark:text-slate-100">
            Rwanda, Kigali, Remote
            <br />
            <br />
          </p>
          <p className=" dark:text-slate-100">Phone: 0794881466</p>
          <p className=" dark:text-slate-100">Email: miraclecode11@gmail.com</p>
        </div>
      </div>
      <div className="relative p-6 grid md:grid-cols-2 bg-white dark:bg-slate-900">
        <p className="body-2 text-n-3 font-semibold h-10 flex items-center justify-center gap-2 p-2  dark:text-slate-100">
          <img
            className="relative lg:h-full my-2 h-[80%] "
            src={copyRightSvg}
          />
          {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="relative flex items-center text-n-1/50 justify-center  dark:text-slate-100">
          Designed by&nbsp;
          <a href={`${designerSocials[1].linkUrl}`}>
            <u className="cursor-pointer text-n-1 font-semibold dark:text-slate-100">
              IBANZE Miracle
            </u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
