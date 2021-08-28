import React from "react";
import UpcommingMovieContent from "./UpcommingMovieContent";
import "./UpcommingMovie.css";

const UpcommingMovie = () => {
  const upCommingMovie = [
    {
      id: 1,
      name: "No Time to Die",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    },
    {
      id: 2,
      name: "The Green Knight",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNWE1ZGE5Y2QtYWE4Yi00YjM0LThhNWYtMWM1OGJjNDU3YzMyXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    },
    {
      id: 3,
      name: "Malignant",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    },
    {
      id: 4,
      name: "Dune",
      imgUrl:
        "https://cdna.artstation.com/p/assets/images/images/030/872/718/large/pascal-blanche-dune-recolor1l.jpg?1601921669",
    },
  ];
  return (
    <div>
      <h3 className="up-comming-movie-title">Upcomming Movie</h3>
      <div className="upcomming-movie">
        {upCommingMovie.map((ucm) => (
          <UpcommingMovieContent
            key={ucm.id}
            upComming={ucm}
          ></UpcommingMovieContent>
        ))}
      </div>
    </div>
  );
};

export default UpcommingMovie;
