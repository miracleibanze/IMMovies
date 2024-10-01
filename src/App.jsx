import Navbar from "./components/Navbar";
import {
  Navigate,
  parsePath,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { allMovies } from "./components/Constants";

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
  const [likes, setLikes] = useState(0);

  const toggleNotAvailable = useCallback(
    () => alert("Not available at the moment !"),
    []
  );

  window.onscroll = () => {
    if (openNavigation) setOpenNavigation(false);
  };
  const persistData = useCallback((user) => {
    localStorage.setItem("user", JSON.stringify({ dummyUserObject: user }));
    console.log(dummyUserObject);
  }, []);

  const saveMovie = useCallback((newMovieList) => {
    localStorage.setItem("movies", JSON.stringify({ movieList: newMovieList }));
  }, []);

  const handleAddWatchlist = (newMovie) => {
    const newMovieList = [...movieList, newMovie];
    setMovieList(newMovieList);
    saveMovie(newMovieList);
  };

  const handleRemoveMovie = (index) => {
    const newMovieList = movieList.filter((item) => {
      return item.id !== index;
    });
    saveMovie(newMovieList);
    setMovieList(newMovieList);
  };
  const [dummyUserObject, setDummyUserObject] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
    imgUrl: "",
  });
  const [signUp, setSignUp] = useState(false);

  const handleAddUser = (event) => {
    console.log(formData);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = useCallback(() => {
    if (signUp) {
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
      !signUp &&
      formData.email === dummyUserObject.email &&
      formData.password === dummyUserObject.password
    ) {
      alert("login successful!");
      setIsLogged(true);
    } else {
      setInvalid(true);
      console.log(formData);
      console.log(dummyUserObject);
    }
  }, [formData]);

  useLayoutEffect(() => {
    if (!localStorage) {
      return;
    }
    let localuser = localStorage.getItem("user");
    if (!localuser) {
      setIsLogged(false);
    } else {
      localuser = JSON.parse(localuser).dummyUserObject;
      dummyUserObject.names = localuser.names;
      dummyUserObject.email = localuser.email;
      dummyUserObject.password = localuser.password;
      dummyUserObject.imgUrl = localuser.imgUrl;
      dummyUserObject.username = localuser.username;
      setIsLogged(true);
      let localMovies = localStorage.getItem("movies");
      localMovies = JSON.parse(localMovies).movieList;
      localMovies.map((item, itemIndex) => (movieList[itemIndex] = item));
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

  useEffect(() => {
    window.scrollTo(top);
  }, [location]);

  return (
    <main
      className={`mt-[3.4rem] px-0 min-h-screen overflow-hidden w-full  flex flex-col justify-between`}
    >
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
        isLogged={isLogged}
        dummyUserObject={dummyUserObject}
      />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center bg-slate-300 dark:bg-slate-900 dark:text-slate-100">
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
            <Route path="/movies/:type/:page" element={<Movies />} />
            <Route path="/trending/:type" element={<Trending />} />
            <Route element={<Watch />} path="/watch/:movie" />
            <Route path="/celebs" element={<Celebs />} />
            <Route
              path="/profile"
              element={
                isLogged ? (
                  <Profile />
                ) : (
                  <Navigate replace to={"/sign_in/auth"} />
                )
              }
            />
            <Route path="/search/:type/movies" element={<Search />} />
            <Route
              path="/watch_list"
              element={
                isLogged ? (
                  <WatchList />
                ) : (
                  <Navigate replace to={"/sign_in/auth"} />
                )
              }
            />
            <Route
              path="/sign_in/:state"
              element={!isLogged ? <SignIn /> : <Navigate replace to={"/"} />}
            />
            <Route
              path="/terms_&_services"
              element={
                isLogged ? (
                  <TermsAndServices />
                ) : (
                  <Navigate replace to={"/sign_in/auth"} />
                )
              }
            />
            <Route
              path="/privacy_policies"
              element={
                isLogged ? (
                  <PrivacyPolicies />
                ) : (
                  <Navigate replace to={"/sign_in/auth"} />
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
