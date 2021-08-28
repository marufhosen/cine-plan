import React from "react";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Footer from "../Footer/Footer";
import NowShowing from "../NowShowing/NowShowing";
import UpcommingMovie from "../UpcommingMovie/UpcommingMovie";

const Home = () => {
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <NowShowing></NowShowing>
      <UpcommingMovie></UpcommingMovie>
      <Footer></Footer>
    </div>
  );
};

export default Home;
