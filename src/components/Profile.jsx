import { memo, useContext, useState } from "react";
import { eye, eyeDark, eyeSlash, eyeSlashDark, user } from "../assets";
import Section from "./design/Section";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const {
    dummyUserObject,
    setIsLogged,
    persistData,
    formData,
    setDummyUserObject,
  } = useContext(AppContext);
  const [seePassword, setSeePassowrd] = useState(false);
  return (
    <Section>
      <h3 className="h3 mb-4 dark:text-slate-100">Your Profile</h3>
      <div className="flex items-center md:flex-row flex-col h-[25rem] md:gap-8 gap-4">
        <div
          className="relative  flex items-center md:h-[25rem] bg-slate-500 h-full aspect-square justify-center bg-cover bg-center "
          style={{ backgroundImage: `url(${user})` }}
        >
          <div
            className={` bg-slate-500 h-full relative bg-cover bg-center aspect-square ${
              !dummyUserObject.imgUrl && "hidden"
            }`}
            style={{
              backgroundImage: `url(${dummyUserObject.imgUrl})`,
            }}
          ></div>
        </div>
        <div className="relative w-full flex flex-col justify-between items-center h-full">
          <div className="w-full ">
            <p className="body-2 font-semibold dark:text-slate-200 ">
              Names:{" "}
              <span className="font-normal dark:text-slate-200  ">
                {dummyUserObject.names}
              </span>
            </p>
            <p className="body-2 font-semibold dark:text-slate-200 ">
              Email:{" "}
              <span className="font-normal dark:text-slate-200 ">
                {dummyUserObject.email}
              </span>
            </p>
            <p className="body-2 font-semibold dark:text-slate-200 ">
              username:{" "}
              <span className="font-normal dark:text-slate-200 ">
                {dummyUserObject.username}
              </span>
            </p>
            <div className="body-2 font-semibold w-full flex items-center max-w-sm justify-between">
              <p className="dark:text-slate-200">
                password:{" "}
                <span className="font-normal dark:text-slate-200 ">
                  {seePassword ? dummyUserObject.password : "***********"}
                </span>
              </p>
              <div
                onClick={() => setSeePassowrd(!seePassword)}
                className="h-5 flex place-content-center relative w-8"
              >
                <img
                  src={eyeSlashDark}
                  className={`h-4 absolute ${!seePassword ? "hidden" : "flex"}`}
                />
                <img
                  src={eyeDark}
                  className={`h-4 absolute ${seePassword ? "hidden" : "flex"}`}
                />
                <img
                  src={eyeSlash}
                  className={`h-4 absolute dark:hidden ${
                    !seePassword ? "hidden" : "flex"
                  }`}
                />
                <img
                  src={eye}
                  className={`h-4 absolute dark:hidden ${
                    seePassword ? "hidden" : "flex"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute relative lg:top-4 lg:right-4 lg:flex grid grid-cols-1 max-lg:w-full lg:flex-col max-lg:mt-16 items-end gap-2">
        <button
          className=" h-12 rounded-md px-8 bg-color-1 text-slate-50"
          onClick={() => {
            setIsLogged(false);
            navigate("/sign_in/auth");
          }}
        >
          Switch user
        </button>
        <button
          className=" h-12 rounded-md px-8 bg-color-1 text-slate-50"
          onClick={() => {
            setIsLogged(false);
            navigate("/");
            setDummyUserObject({
              names: "",
              username: "",
              password: "",
              email: "",
            });
            persistData(dummyUserObject);
          }}
        >
          Log out
        </button>
      </div>
    </Section>
  );
};

export default memo(Profile);
