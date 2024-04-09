import Pegi from "../pegi/pegi";
import CinemaIcon from "../../assets/film.png";
import Round from "../Round/round";
import Star from "../../assets/star.png";
import "./cardMovieTopRated.css";
import { ComponentPropsWithRef } from "react";

type typeProps = {
  url: string;
  adult: boolean;
  title: string;
  genres: string[];
  vote: number;
} & ComponentPropsWithRef<'div'>;

export default function CardMovieTopRated({
  url,
  adult,
  title,
  genres,
  vote,
}: typeProps) {

  return (
    <div className="card-movietoprated">
      <img className="movietoprated-card" src={`https://image.tmdb.org/t/p/w500${url}`} alt="" />
      <div className="container-card">
        <Pegi>{ adult ? "PG-18" : "PG-13"} </Pegi>
        <h3>{title}</h3>
        <div className="container-genre">
          <img src={CinemaIcon} alt="cinema icons" />
          {genres.map((genre, index) => (
            <>
              <span key={index} className="card-genre">{genre}</span>
              {index !== genres.length - 1 && <Round />}
            </>
          ))}
        </div>
        <div className="container-note">
          <img src={Star} alt="" />
          <p className="card-note">{vote}</p>
        </div>
      </div>
    </div>
  );
}
