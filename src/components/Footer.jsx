import {
  designerSocials,
  footerQuickLinks,
  goUp,
  ourMoviesGenre,
} from "./Constants";
import { Link } from "react-router-dom";
import { ADoubleRightSvg, deadPool } from "../assets";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${deadPool})` }}
      className="bg-contain lg:bg-left-top bg-center"
    >
      <div className="flex items-start flex-wrap justify-evenly py-6 lg:footer-bg  bg-[#ffffffb5] lg:pl-24 p-8">
        <div className="lg:w-1/3 w-full lg:mb-0 mb-4">
          <h4 className="h4 font-semibold font-press">IMMovies</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            labore architecto non doloribus sequi fuga?
          </p>
          <div className="flex items-center gap-4 mt-3 ml-4">
            {designerSocials.map((item) => (
              <a
                href={item.linkUrl}
                key={item.name}
                className="hover:scale-[1.2]"
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
          <h6 className="h6">USEFULL LINKS</h6>
          {footerQuickLinks.map((item) => (
            <Link
              to={item.navigateLink}
              className="flex items-center gap-2"
              key={item.id}
              onClick={goUp}
            >
              <img src={ADoubleRightSvg} className="h-4" />
              {item.name}
            </Link>
          ))}
        </div>
        <Link to={"/movies"} onClick={goUp}>
          <h6 className="h6">OUR MOVIES</h6>
          {ourMoviesGenre.map((item) => (
            <span
              className={`${
                item.id != 0 && item.id != 6 && item.id != 3 ? "flex" : "hidden"
              } items-center gap-2`}
              key={item.id}
            >
              <img src={ADoubleRightSvg} className="h-4" />
              {item.name}
            </span>
          ))}
        </Link>
        <div>
          <h6 className="h6">CONTACT US</h6>
          <p>IBANZE Miracle</p>
          <p>
            Rwanda, Kigali, Remote
            <br />
            <br />
          </p>
          <p>Phone: 0794881466</p>
          <p>Email: miraclecode11@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
