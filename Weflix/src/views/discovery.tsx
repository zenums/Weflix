import SerieHeader from "../features/discovery/serieHeader";
import MovieTop from "../features/discovery/movieTop";
import "../features/discovery/discovery.css";
import CardCompany from "../features/discovery/cardCompany";
import LogoDisney from "../assets/logo_company/disney.png";
import LogoNationGeo from "../assets/logo_company/national-geographic.png";
import LogoStarWars from "../assets/logo_company/star-wars.png";
import LogoMarvel from "../assets/logo_company/marvel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



export default function Discovery() {
  return (
    <div className="discovery">
      <div className="bloc-main">
        <SerieHeader />
        <div className="container-company">    
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            direction="horizontal"
          >
            <SwiperSlide><CardCompany logo={LogoDisney} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoNationGeo} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoStarWars} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoMarvel} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoDisney} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoDisney} /></SwiperSlide>
            <SwiperSlide><CardCompany logo={LogoDisney} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bloc-secondary">
        <MovieTop />
      </div>
    </div>
  );
}
