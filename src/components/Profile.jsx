import { useContext, useState } from "react";
import { eye, eyeSlash, user } from "../assets";
import Section from "./design/Section";
import { AppContext } from "../App";

const Profile = () => {
  const { dummyUserObject, setIsLogged, navigate, persistData, setFormData } =
    useContext(AppContext);
  const [seePassword, setSeePassowrd] = useState(false);
  return (
    <Section>
      <h3 className="h3 mb-4">Your Profile</h3>
      <div className="grid relative md:grid-cols-2 h-[25rem] md:gap-8 gap-4">
        <div className=" h-full w-full flex items-center justify-center ">
          <div
            className="lg:h-[25rem] relative bg-cover bg-center bg-slate-400 aspect-square"
            style={{ backgroundImage: `url(${user})` }}
          ></div>
        </div>
        <div className="relative w-full flex flex-col justify-between items-center">
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
                your password:{" "}
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
      <button
        className="absolute top-4 right-4 h-12 rounded-md px-8 bg-color-1 text-slate-50"
        onClick={() => {
          setIsLogged(false);
          navigate("./sign_in");
        }}
      >
        Switch user
      </button>
      <button
        className="absolute top-18 right-4 h-12 rounded-md px-8 bg-color-1 text-slate-50"
        onClick={() => {
          setFormData({
            names: "",
            username: "",
            password: "",
            email: "",
          });
          setIsLogged(false);
          navigate("./");
        }}
      >
        Log out
      </button>
    </Section>
  );
};

export default Profile;
