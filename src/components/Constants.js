import {
  fastX,
  freeGuy,
  joker,
  marvel,
  rampage,
  wednesday,
  facebookSvg,
  githubSvg,
  linkedInSvg,
  twitterSvg,
  ThingsIHateAboutYou,
  animal,
  aquaman,
  archer,
  avatar,
  batMan,
  beautyAndTheBeast,
  bulletTrain,
  captainMarvel,
  dora,
  fate,
  freshPrince,
  from,
  furiosa,
  harryPotter,
  interstellar,
  johnWick,
  jumanji,
  kate,
  lcu,
  liveDieReapeat,
  lupin,
  matrix,
  nightAtMuseum,
  noTimeToDie,
  piratesOfCarribean,
  pixel,
  raceToTheWitchMountain,
  schoolForGoodAndDevil,
  stuber,
  theKitchen,
  uncharted,
  titanic,
  theTick,
  whoAmI,
} from "../assets";

export const designerSocials = [
  {
    name: "twitter",
    iconUrl: twitterSvg,
    linkUrl: "#",
  },
  {
    name: "github",
    iconUrl: githubSvg,
    linkUrl: "https://github.com/miracleibanze/",
  },
  {
    name: "Facebook",
    iconUrl: facebookSvg,
    linkUrl: "https://facebook.com/MiracleCode/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedInSvg,
    linkUrl: "https://www.linkedin.com/in/ibanze-miracle-a203b6270",
  },
];

export const navMenu = [
  {
    id: 0,
    name: "Movies",
    navigateLink: "/movies",
  },
  {
    id: 1,
    name: "TV Shows",
    navigateLink: "/tv_shows",
  },
  {
    id: 2,
    name: "Awards & Events",
    navigateLink: "/awards_&_events",
  },
  {
    id: 3,
    name: "Watch",
    navigateLink: "/watch",
  },
  {
    id: 4,
    name: "Celebs",
    navigateLink: "/celebs",
  },
];

export const ourMoviesGenre = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Romance",
  },
  {
    id: 3,
    name: "Thriller",
  },
  {
    id: 4,
    name: "Horror",
  },
  {
    id: 5,
    name: "Adventure",
  },
  {
    id: 6,
    name: "Comedy",
  },
  {
    id: 7,
    name: "More",
  },
];

export const footerQuickLinks = [
  {
    id: 0,
    name: "Home",
    navigateLink: "/",
  },
  {
    id: 1,
    name: "Movies",
    navigateLink: "/movies",
  },
  {
    id: 2,
    name: "My List",
    navigateLink: "/watch_list",
  },
  {
    id: 3,
    name: "Terms of Services",
    navigateLink: "/terms_&_services",
  },
  {
    id: 4,
    name: "Privacy Policies",
    navigateLink: "/privacy_policies",
  },
];

export const goUp = () => {
  window.scrollTo(0, 0);
};

export const randomMovies = [
  {
    id: 0,
    name: "free Guy",
    imageUrl: freeGuy,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modi?",
  },
  {
    id: 1,
    imageUrl: fastX,
    name: "Fast X",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam molestiae qui sit voluptate? Expedita neque nihil fugiat assumenda qui nostrum odio earum mollitia?",
  },
  {
    id: 2,
    name: "Avengers: End Game",
    imageUrl: marvel,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis cum pariatur repellat expedita quae velit numquam nisi.",
  },
  {
    id: 3,
    name: "The Dark knight: Joker",
    imageUrl: joker,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam expedita minima velit ullam sunt.",
  },
  {
    id: 4,
    name: "Wednesday",
    imageUrl: wednesday,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eius quasi, consequatur dignissimos repellat aspernatur? Reiciendis mollitia fuga molestias voluptas ad ipsum nesciunt quis quisquam nostrum.",
  },
  {
    id: 5,
    name: "Rampage",
    imageUrl: rampage,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quam fuga doloremque porro.",
  },
];

export const allMovies = [
  {
    id: 0,
    name: "10 Things I Hate About You",
    imgUrl: ThingsIHateAboutYou,
    movieType: "Romance",
  },
  {
    id: 1,
    name: "Animal",
    imgUrl: animal,
    movieType: "Action",
    topTen: true,
  },
  {
    id: 2,
    name: "Aquaman: queen Atlanta",
    imgUrl: aquaman,
    movieType: "Thriller",
  },
  {
    id: 3,
    name: "Archer",
    imgUrl: archer,
    movieType: "Action",
  },
  {
    id: 4,
    name: "Avatar: The last airbender",
    imgUrl: avatar,
    movieType: "Serie",
    topTen: true,
  },
  {
    id: 5,
    name: "BatMan: The dark night",
    imgUrl: batMan,
    movieType: "Thriller",
  },
  {
    id: 6,
    name: "Beauty And The Beast",
    imgUrl: beautyAndTheBeast,
    movieType: "Romance",
  },
  {
    id: 7,
    name: "Bullet Train",
    imgUrl: bulletTrain,
    movieType: "Comedy",
  },
  {
    id: 8,
    name: "Captain Marvel",
    imgUrl: captainMarvel,
    movieType: "Thriller",
    topTen: true,
  },
  {
    id: 9,
    name: "Dora",
    imgUrl: dora,
    movieType: "Adventure",
  },
  {
    id: 10,
    name: "Fate",
    imgUrl: fate,
    movieType: "Horror",
  },
  {
    id: 11,
    name: "Fresh Prince",
    imgUrl: freshPrince,
    movieType: "Comedy",
  },
  {
    id: 13,
    name: "From",
    imgUrl: from,
    movieType: "Horror",
  },
  {
    id: 14,
    name: "Furiosa",
    imgUrl: furiosa,
    movieType: "Action",
    topTen: true,
  },
  {
    id: 15,
    name: "Harry Potter",
    imgUrl: harryPotter,
    movieType: "Adventure",
  },
  {
    id: 16,
    name: "Interstellar",
    imgUrl: interstellar,
    movieType: "Sci-fi",
  },
  {
    id: 17,
    name: "John Wick",
    imgUrl: johnWick,
    movieType: "Action",
    topTen: true,
  },
  {
    id: 18,
    name: "Jumanji",
    imgUrl: jumanji,
    movieType: "Adventure",
    topTen: true,
  },
  {
    id: 19,
    name: "Kate",
    imgUrl: kate,
    movieType: "Action",
  },
  {
    id: 20,
    name: "LCU",
    imgUrl: lcu,
    movieType: "Action",
  },
  {
    id: 21,
    name: "Live Die Reapeat",
    imgUrl: liveDieReapeat,
    movieType: "Action",
    topTen: true,
  },
  {
    id: 22,
    name: "Lupin",
    imgUrl: lupin,
    movieType: "Action",
  },
  {
    id: 23,
    name: "Matrix",
    imgUrl: matrix,
    movieType: "Action",
    topTen: true,
  },
  {
    id: 24,
    name: "Night At Museum",
    imgUrl: nightAtMuseum,
    movieType: "Horror",
  },
  {
    id: 25,
    name: "No Time To Die",
    imgUrl: noTimeToDie,
    movieType: "Action",
  },
  {
    id: 26,
    name: "Pirates Of Carribean",
    imgUrl: piratesOfCarribean,
    movieType: "Adventure",
    topTen: true,
  },
  {
    id: 27,
    name: "Pixel",
    imgUrl: pixel,
    movieType: "Sci-fi",
  },
  {
    id: 28,
    name: "Race To The Witch Mountain",
    imgUrl: raceToTheWitchMountain,
    movieType: "Adventure",
    topTen: true,
  },
  {
    id: 29,
    name: "School For Good And Devil",
    imgUrl: schoolForGoodAndDevil,
    movieType: "Horror",
  },
  {
    id: 30,
    name: "Stuber",
    imgUrl: stuber,
    movieType: "Action",
  },
  {
    id: 31,
    name: "The Kitchen",
    imgUrl: theKitchen,
    movieType: "Action",
  },
  {
    id: 32,
    name: "Uncharted",
    imgUrl: uncharted,
    movieType: "Adventure",
  },
  {
    id: 33,
    name: "Titanic",
    imgUrl: titanic,
    movieType: "Adventure",
  },
  {
    id: 34,
    name: "The Tick",
    imgUrl: theTick,
    movieType: "Cartoon",
  },
  {
    id: 35,
    name: "Who Am I",
    imgUrl: whoAmI,
    movieType: "Horror",
  },
];
