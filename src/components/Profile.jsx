import { memo, useContext, useState } from "react";
import { eye, eyeSlash, user } from "../assets";
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
      <h3 className="h3 mb-4">Your Profile</h3>
      <div className="flex items-center md:flex-row flex-col h-[25rem] md:gap-8 gap-4">
        <div
          className="relative  flex items-center md:h-[25rem]  bg-slate-500 h-full aspect-square ${
 h-[20rem] bg-red-400 justify-center bg-cover bg-center "
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
          <div className="w-full">
            <p className="body-2 font-semibold">
              Names:{" "}
              <span className="font-normal">{dummyUserObject.names}</span>
            </p>
            <p className="body-2 font-semibold">
              Email:{" "}
              <span className="font-normal">{dummyUserObject.email}</span>
            </p>
            <p className="body-2 font-semibold">
              username:{" "}
              <span className="font-normal">{dummyUserObject.username}</span>
            </p>
            <div className="body-2 font-semibold w-full flex items-center justify-between">
              <p>
                password:{" "}
                <span className="font-normal">
                  {seePassword ? dummyUserObject.password : "***********"}
                </span>
              </p>
              <div onClick={() => setSeePassowrd(!seePassword)}>
                <img
                  src={seePassword ? eyeSlash : eye}
                  alt="view"
                  className="h-6"
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
            navigate("/sign_in");
          }}
        >
          Switch user
        </button>
        <button
          className=" h-12 rounded-md px-8 bg-color-1 text-slate-50"
          onClick={() => {
            setIsLogged(false);
            navigate("./");
            persistData(formData);
            setDummyUserObject({
              names: "",
              username: "",
              password: "",
              email: "",
            });
          }}
        >
          Log out
        </button>
      </div>
    </Section>
  );
};

export default memo(Profile);
