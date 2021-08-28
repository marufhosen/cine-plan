import React from "react";
import NowShowingContent from "./NowShowingContent";
import "./NowShowing.css";

const NowShowing = () => {
  const nowPlaying = [
    {
      id: 1,
      name: "The Suicide Squad",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_.jpg",
    },
    {
      id: 2,
      name: "Space Jam: A New",
      imgUrl:
        "https://www.reelviews.net/resources/img/posters/thumbs/space_jam_poster.jpeg",
    },
    {
      id: 3,
      name: "F9: The Fast Saga",
      imgUrl:
        "https://movies.universalpictures.com/media/ff9-teaser-1sheet-group-thursday-rgb-1sm-5e334ab003740-1.jpg",
    },
    {
      id: 4,
      name: "Jungle Cruise",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    },
  ];
  return (
    <div>
      <h3 className="now-showing-title">Now Showing</h3>
      <div className="now-playing">
        {nowPlaying.map((npl) => (
          <NowShowingContent key={npl.id} nowPlaying={npl}></NowShowingContent>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
