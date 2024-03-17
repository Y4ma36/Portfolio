import movie1 from "../assets/moviePic/p1.png";
import movie2 from "../assets/moviePic/p2.png";
import movie3 from "../assets/moviePic/p3.png";
import movie4 from "../assets/moviePic/p4.png";
import art1 from "../assets/onlineArt/a1.png";
import art2 from "../assets/onlineArt/a2.png";
import art3 from "../assets/onlineArt/a3.png";
import art4 from "../assets/onlineArt/a4.png";

export const projects = [
  {
    name: "Movie Website",
    imgs: [movie1, movie2, movie3, movie4],
    detail: {
      overview:
        "MovieWebsite is a dynamic and user-friendly movie website that provides a comprehensive collection of movies from various tranding, toprated and popular. Created by React and integrated with the TMDB (The Movie Database) API, MovieWebsite offers users a seamless experience to explore, discover, and enjoy their favorite movies.",
      function:
        "Through daily updates, users can get information about current movie trends and movies information",
      github: "https://github.com/Y4ma36/MovieWebsite",
      URL: "https://y4ma36.github.io/MovieWebsite/",
      frontend: "HTML, CSS, JAVASCRIPT, REACT, Style-Component",
      deployment: "Github-Page",
    },
  },
  {
    name: "Onlie Art Portfolio",
    imgs: [art1, art2, art3, art4],
    detail: {
      overview:
        "Initiated and completed the development of a personal online art portfolio using React and NextJS showcasing a collection of my sister’s artwork. Implemented a responsive design to ensure optimal viewing experience across various devices, enhancing accessibility for a wider audience. Gained valuable insights into the synergies between React and Next.js, harnessing both technologies' strengths to craft a visually stunning and high-performing online space for art enthusiasts.",
      function:
        "A website was created so that artists could display their desired paintings online and easily communicate with them.",
      github: "https://github.com/Y4ma36/OnlineArtPortfolio",
      URL: "https://online-art-portfolio-k4nsxnnwn-y4ma36s-projects.vercel.app/",
      frontend: "HTML, CSS, JAVASCRIPT, NextJs, Tailwind css",
      deployment: "Vercel",
    },
  },
];
