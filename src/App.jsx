import Navbar from "./components/Navbar";
import {
  Navigate,
  parsePath,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AwardsEvents from "./components/AwardsEvents";
import Footer from "./components/Footer";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";

const Movies = lazy(() => import("./components/Movies"));
const TvShows = lazy(() => import("./components/TvShows"));
const Watch = lazy(() => import("./components/Watch"));
const Celebs = lazy(() => import("./components/Celebs"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const WatchList = lazy(() => import("./components/WatchList"));
const SignIn = lazy(() => import("./components/SignIn"));
const TermsAndServices = lazy(() => import("./components/TermsAndServices"));
const PrivacyPolicies = lazy(() => import("./components/PrivacyPolicies"));
const Hero = lazy(() => import("./components/Hero"));

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation(parsePath);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [formData, setFormData] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
  });
  const [isLogged, setIsLogged] = useState(false);
  const [invalid, setInvalid] = useState(false);

  function persistData(user) {
    localStorage.setItem("user", JSON.stringify({ dummyUserObject: user }));
  }

  const [dummyUserObject, setDummyUserObject] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
  });

  const handleAddUser = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = () => {
    if (formData.names != "") {
      console.log(formData.names);
      console.log(formData);
      dummyUserObject.names = formData.names;
      dummyUserObject.username = formData.username;
      dummyUserObject.email = formData.email;
      dummyUserObject.password = formData.password;
      persistData(dummyUserObject);
      setIsLogged(true);
      alert("Account created successfully !");
    } else if (
      formData.username === dummyUserObject.username &&
      formData.password === dummyUserObject.password
    ) {
      alert("login successful!");
      setIsLogged(true);
    } else {
      setInvalid(true);
    }
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localuser = localStorage.getItem("user");
    if (!localuser) {
      setIsLogged(false);
    }
    localuser = JSON.parse(localuser).dummyUserObject;
    setDummyUserObject(localuser);
  }, []);

  return (
    <main
      className={`min-h-screen overflow-hidden flex flex-col justify-between mt-[4rem] border`}
    >
      <AppContext.Provider
        value={{
          openNavigation,
          setOpenNavigation,
          location,
          persistData,
          handleAddUser,
          isLogged,
          setIsLogged,
          formData,
          setFormData,
          setIsLogged,
          handleLogin,
          dummyUserObject,
          setFormData,
          invalid,
          setInvalid,
        }}
      >
        <Navbar />
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              Loading ...
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv_shows" element={<TvShows />} />
            <Route path="/awards_&_events" element={<AwardsEvents />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/celebs" element={<Celebs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/watch_list"
              element={
                isLogged ? <WatchList /> : <Navigate replace to={"/sign_in"} />
              }
            />
            <Route
              path={`${isLogged ? "/sign_in" : "/sign_in"}`}
              element={!isLogged ? <SignIn /> : <Navigate replace to={"/"} />}
            />
            <Route
              path="/terms_&_services"
              element={
                isLogged ? (
                  <TermsAndServices />
                ) : (
                  <Navigate replace to={"/sign_in"} />
                )
              }
            />
            <Route
              path="/privacy_policies"
              element={
                isLogged ? (
                  <PrivacyPolicies />
                ) : (
                  <Navigate replace to={"/sign_in"} />
                )
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </AppContext.Provider>
    </main>
  );
}

export default App;
