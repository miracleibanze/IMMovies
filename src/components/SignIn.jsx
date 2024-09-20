import { useContext, useState } from "react";
import { AppContext } from "../App";
import { UTurnLeft } from "../assets";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { handleAddUser, handleLogin, invalid, setInvalid } =
    useContext(AppContext);

  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-slate-900 z-[9999] flex items-center justify-center "
      onClick={() => {
        if (invalid) setInvalid(false);
      }}
    >
      <div className="absolute top-4 left-4" onClick={() => navigate("/")}>
        <img src={UTurnLeft} alt="back" className="h-6" />
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="relative h2 font-bold text-slate-50 text-center mb-4">
          {signUp ? "Sign Up" : "Log In"}
        </div>
        <input
          type="text"
          placeholder="Full names"
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "flex" : "hidden"
          }`}
          name="names"
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder="Your email"
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "flex" : "hidden"
          }`}
          name="email"
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder={`${signUp ? "choose username" : "You username"} `}
          className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]"
          name="username"
          onChange={handleAddUser}
        />
        <input
          type="password"
          name="password"
          placeholder={`${signUp ? "choose password" : "Your password"} `}
          className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]"
          onChange={handleAddUser}
        />
        {!signUp && (
          <span
            className={`${
              invalid ? "flex" : "hidden"
            } items-center justify-center text-red-400`}
          >
            -Invalid username or password-
          </span>
        )}
        <button
          className={`py-2 px-4 outline-none bg-color-1 lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "hidden" : "flex"
          }`}
          onClick={() => handleLogin()}
        >
          Log In
        </button>
        <span
          className={` ${
            signUp ? "hidden" : "flex"
          } text-slate-50 w-full justify-center`}
        >
          -or-
        </span>
        <button
          className={`py-2 px-4 outline-none  ${
            signUp
              ? "bg-color-1"
              : "border border-color-1 hover:bg-color-1 text-slate-50 hover:text-black"
          } lg:w-[25rem] md:w-[20rem] w-[15rem]`}
          onClick={() => {
            if (signUp) {
              return handleLogin();
            } else {
              return setSignUp(true);
            }
          }}
        >
          Sign Up
        </button>
        <button
          className={`py-2 px-4 outline-none justify-center text-color-2 hover:text-black border border-color-1 hover:bg-color-1 ${
            signUp ? "flex" : "hidden"
          }`}
          onClick={() => setSignUp(false)}
        >
          Already have account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
