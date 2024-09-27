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
  user,
  deadPool,
  xMen,
  theMarvels,
  dwayneJohnson,
  willSmith,
  tomCruise,
  robertDowney,
  nicolasCage,
  liamNeeson,
  leonardoDiCaprio,
  kevinHart,
  idrisElba,
  eddieMurphy,
  noVideo,
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
    name: "Home",
    navigateLink: "/",
  },
  {
    id: 1,
    name: "Movies",
    navigateLink: "/movies/All/movies",
  },
  {
    id: 2,
    name: "Trending",
    navigateLink: "/trending/box-office",
  },
  {
    id: 3,
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
    name: "Sci-fi",
  },
  {
    id: 8,
    name: "Series",
  },
  {
    id: 9,
    name: "More",
  },
];

export const moviePlaceHolder = {
  id: "0",
  name: "Movie name",
  imgUrl: noVideo,
};

export const footerQuickLinks = [
  {
    id: 0,
    name: "Home",
    navigateLink: "/",
  },
  {
    id: 1,
    name: "Movies",
    navigateLink: "/movies/All/movies",
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

export const topTen = {
  link: "topTen",
  name: "Top Ten",
};

export const goUp = () => {
  window.scrollTo(0, 0);
};

export const randomMovies = [
  {
    id: 0,
    name: "Free Guy",
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
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 1,
    name: "Animal",
    imgUrl: animal,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 2,
    name: "Aquaman: queen Atlanta",
    imgUrl: aquaman,
    movieType: "Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 3,
    name: "Archer",
    imgUrl: archer,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 4,
    name: "Avatar: The last airbender",
    imgUrl: avatar,
    movieType: "Series",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 5,
    name: "BatMan: The dark night",
    imgUrl: batMan,
    movieType: "Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 6,
    name: "Beauty And The Beast",
    imgUrl: beautyAndTheBeast,
    movieType: "Romance",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    suggested: true,
  },
  {
    id: 7,
    name: "Bullet Train",
    imgUrl: bulletTrain,
    movieType: "Comedy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 8,
    name: "Captain Marvel",
    imgUrl: captainMarvel,
    movieType: "Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 9,
    name: "Dora",
    imgUrl: dora,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 10,
    name: "Fate",
    imgUrl: fate,
    movieType: "Horror",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    suggested: true,
  },
  {
    id: 11,
    name: "Fresh Prince",
    imgUrl: freshPrince,
    movieType: "Comedy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    suggested: true,
  },
  {
    id: 12,
    name: "From",
    imgUrl: from,
    movieType: "Horror",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 13,
    name: "Furiosa",
    imgUrl: furiosa,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 14,
    name: "Harry Potter",
    imgUrl: harryPotter,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    suggested: true,
  },
  {
    id: 15,
    name: "Interstellar",
    imgUrl: interstellar,
    movieType: "Sci-fi",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 16,
    name: "John Wick",
    imgUrl: johnWick,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
    suggested: true,
  },
  {
    id: 17,
    name: "Jumanji",
    imgUrl: jumanji,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
    suggested: true,
  },
  {
    id: 18,
    name: "Kate",
    imgUrl: kate,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 19,
    name: "LCU",
    imgUrl: lcu,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 20,
    name: "Live Die Reapeat",
    imgUrl: liveDieReapeat,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
    suggested: true,
  },
  {
    id: 21,
    name: "Lupin",
    imgUrl: lupin,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 22,
    name: "Matrix",
    imgUrl: matrix,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 23,
    name: "Night At Museum",
    imgUrl: nightAtMuseum,
    movieType: "Horror",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 24,
    name: "No Time To Die",
    imgUrl: noTimeToDie,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 25,
    name: "Pirates Of Carribean",
    imgUrl: piratesOfCarribean,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
    suggested: true,
  },
  {
    id: 26,
    name: "Pixel",
    imgUrl: pixel,
    movieType: "Sci-fi",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 27,
    name: "Race To The Witch Mountain",
    imgUrl: raceToTheWitchMountain,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    topTen: true,
  },
  {
    id: 28,
    name: "School For Good And Devil",
    imgUrl: schoolForGoodAndDevil,
    movieType: "Horror",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 29,
    name: "Stuber",
    imgUrl: stuber,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 30,
    name: "The Kitchen",
    imgUrl: theKitchen,
    movieType: "Action",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 31,
    name: "Uncharted",
    imgUrl: uncharted,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 32,
    name: "Titanic",
    imgUrl: titanic,
    movieType: "Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
    suggested: true,
  },
  {
    id: 33,
    name: "The Tick",
    imgUrl: theTick,
    movieType: "Cartoon",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 34,
    name: "Who Am I",
    imgUrl: whoAmI,
    movieType: "Horror",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint blanditiis labore. Ipsa hic ad quod veritatis quia ullam soluta.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 35,
    name: "Free Guy",
    imgUrl: freeGuy,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modium dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modi?",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 36,
    imgUrl: fastX,
    name: "Fast X",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam molestiae qui sit voluptate? Expedita neque nihil fuum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modigiat assumenda qui nostrum odio earum mollitia?",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 37,
    name: "Avengers: End Game",
    imgUrl: marvel,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis cum pariatur repellat expedita quae velit numquam nisum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modii.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 38,
    name: "The Dark knight: Joker",
    imgUrl: joker,
    description:
      "Lorem ipsum dolor sit amet, consecum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum moditetur adipisicing elit. Rerum nam expedita minima velit ullam sunt.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 39,
    name: "Wednesday",
    imgUrl: wednesday,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eius quasi, consequatur dignissimos repellat aspernatur? Reiciendis mollitia fuga molestias voluptas ad ipsum nesciunt quis quisquaum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modim nostrum.",
    likes: 75,
    disLikes: 2,
  },
  {
    id: 40,
    name: "Rampage",
    imgUrl: rampage,
    description:
      "Lorem ipsum dolor sit amet consecteturum dolor sit, amet consectetur adipisicing elit. Libero animi dolore consequuntur corrupti, veritatis dolor iste magnam! Inventore, eum modi, adipisicing elit. Officia quasi quam fuga doloremque porro.",
    likes: 75,
    disLikes: 2,
  },
];

export const blogs = [
  {
    id: 0,
    title: "Deadpool:",
    description:
      "was announced to be very excited since gonna join hands with Wolverine",
    commenter: "John doe",
    commenterAddress: "UK, Novada",
    avatar: user,
    bgUrl: deadPool,
  },
  {
    id: 1,
    title: "X-men:",
    description:
      " Apocalypse, is about to be released after the release of X-men: The Angle 2",
    commenter: "Mark jean",
    commenterAddress: "USA, Los Angles",
    avatar: user,
    bgUrl: xMen,
  },
  {
    id: 2,
    title: "The marvels:",
    description:
      " There is the compilation of both Captain marvel characters in the same movie",
    commenter: "Peter canon",
    commenterAddress: "USA, NewYork",
    avatar: user,
    bgUrl: theMarvels,
  },
  {
    id: 3,
    title: "Matrix:",
    description:
      " This is trending movies that have best action playback of time in history of movies like thos",
    commenter: "chamn stinger",
    commenterAddress: "USA, texas",
    avatar: user,
    bgUrl: matrix,
  },
];

export const movieStars = [
  {
    id: 0,
    name: "Dwayne Johnson",
    avatar: dwayneJohnson,
  },
  {
    id: 1,
    name: "Robert Downey",
    avatar: robertDowney,
  },
  {
    id: 2,
    name: "Idris Elba",
    avatar: idrisElba,
  },
  {
    id: 3,
    name: "Will Smith",
    avatar: willSmith,
  },
  {
    id: 4,
    name: "Kevin Hart",
    avatar: kevinHart,
  },
  {
    id: 5,
    name: "Tom Cruise",
    avatar: tomCruise,
  },
  {
    id: 6,
    name: "Nicolas Cage",
    avatar: nicolasCage,
  },
  {
    id: 7,
    name: "Eddie Murphy",
    avatar: eddieMurphy,
  },
  {
    id: 8,
    name: "Leonardo DiCaprio",
    avatar: leonardoDiCaprio,
  },
  {
    id: 9,
    name: "Liam Neeson",
    avatar: liamNeeson,
  },
];
