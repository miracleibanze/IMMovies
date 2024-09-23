import Navbar from "./components/Navbar";
import {
  Navigate,
  parsePath,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { allMovies, moviePlaceHolder } from "./components/Constants";

const Movies = lazy(() => import("./components/Movies"));
const Watch = lazy(() => import("./components/Watch"));
const Trending = lazy(() => import("./components/Trending"));
const Celebs = lazy(() => import("./components/Celebs"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const WatchList = lazy(() => import("./components/WatchList"));
const SignIn = lazy(() => import("./components/SignIn"));
const TermsAndServices = lazy(() => import("./components/TermsAndServices"));
const Search = lazy(() => import("./components/Search"));
const Profile = lazy(() => import("./components/Profile"));
const PrivacyPolicies = lazy(() => import("./components/PrivacyPolicies"));
const Hero = lazy(() => import("./components/Hero"));

export const AppContext = createContext();

function App() {
  const location = useLocation(parsePath);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [formData, setFormData] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
    imgUrl: "",
  });
  const [isLogged, setIsLogged] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [noMovieListed, setNoMovieListed] = useState(0);
  const [likes, setLikes] = useState(0);

  const toggleNotAvailable = () => alert("Not available at the moment !");

  window.onscroll = () => {
    if (openNavigation) setOpenNavigation(false);
  };
  function persistData(user) {
    localStorage.setItem("user", JSON.stringify({ dummyUserObject: user }));
  }

  function saveMovie(newMovieList) {
    localStorage.setItem("movies", JSON.stringify({ movieList: newMovieList }));
  }

  function handleAddWatchlist(newMovie) {
    const newMovieList = [...movieList, newMovie];
    setMovieList(newMovieList);
    saveMovie(newMovieList);
  }

  function handleRemoveMovie(index) {
    const newMovieList = movieList.filter((item) => {
      return item.id !== index;
    });
    saveMovie(newMovieList);
    setMovieList(newMovieList);
  }
  const [dummyUserObject, setDummyUserObject] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
    imgUrl: "",
  });
  const [signUp, setSignUp] = useState(false);

  const handleAddUser = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = () => {
    if (formData.names != "" && signUp) {
      console.log(formData.names);
      console.log(formData);
      dummyUserObject.names = formData.names;
      dummyUserObject.username = formData.username;
      dummyUserObject.email = formData.email;
      dummyUserObject.password = formData.password;
      dummyUserObject.imgUrl = formData.imgUrl;
      persistData(dummyUserObject);
      setIsLogged(true);
      alert("Account created successfully !");
    } else if (
      formData.email === dummyUserObject.email &&
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
    let localMovies = localStorage.getItem("movies");
    if (!localuser) {
      setIsLogged(false);
      handleAddWatchlist(moviePlaceHolder);
    } else {
      localuser = JSON.parse(localuser).dummyUserObject;
      localMovies = JSON.parse(localMovies).movieList;
      setDummyUserObject(localuser);
      setMovieList(localMovies);
      setIsLogged(true);
    }
    if (dummyUserObject.names === "") {
      setIsLogged(false);
    }
    allMovies.forEach((element) => {
      if (element.id < allMovies.length / 4) {
        element.likes += element.id;
      } else if (
        element.id >= allMovies.length / 4 &&
        element.id < allMovies.length / 2
      ) {
        element.likes += element.id - allMovies.length / 4;
      } else if (
        element.id >= allMovies.length / 2 &&
        element.id < (allMovies.length * 3) / 4
      ) {
        element.likes += element.id - allMovies.length / 2;
      } else {
        element.likes += element.id - (allMovies.length * 3) / 4;
      }
    });
  }, []);

  return (
    <main
      className={`mt-[3.4rem] min-h-screen overflow-hidden w-full flex flex-col justify-between border`}
    >
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
        location={location}
        isLogged={isLogged}
        dummyUserObject={dummyUserObject}
      />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center">
            Loading ...
          </div>
        }
      >
        <AppContext.Provider
          value={{
            openNavigation,
            setOpenNavigation,
            location,
            persistData,
            handleAddUser,
            isLogged,
            toggleNotAvailable,
            setIsLogged,
            handleLogin,
            dummyUserObject,
            invalid,
            setInvalid,
            handleAddWatchlist,
            movieList,
            setMovieList,
            handleRemoveMovie,
            noMovieListed,
            setFormData,
            formData,
            setDummyUserObject,
            signUp,
            setSignUp,
            likes,
            setLikes,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/trending" element={<Trending />} />
            <Route element={<Watch />} path="/watch/:movie" />
            <Route path="/celebs" element={<Celebs />} />
            <Route
              path="/profile"
              element={
                isLogged ? <Profile /> : <Navigate replace to={"/sign_in"} />
              }
            />
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
        </AppContext.Provider>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
