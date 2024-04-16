import { ComponentPropsWithoutRef } from "react";
import Star from "../../assets/star.png";
import Round from "../../components/Round/round";

type cardMovieBestofProps = {
  url: string;
  note: number;
  title: string;
  genres: string[];
} & ComponentPropsWithoutRef<"div">;

export default function CardMovieBestof({
  url,
  note,
  title,
  genres,
  ...rest
}: cardMovieBestofProps) {

    
  const displayedGenres = genres.slice(0, 2);
  const displayedUrl = `https://image.tmdb.org/t/p/w500${url}`;

  return (
    <div className="card-movie-bestof" {...rest}>
      <div
        className="img-movie-bestof"
        style={{ background: `url(${displayedUrl})` }}
      ></div>
      <div className="bloc-info">
        <h3>{title}</h3>
        <div className="bloc-note">
          <div>
            <img src={Star}/>
            <span>{note}</span>
          </div>
          |
          <div>
            {displayedGenres.map((genre, index) => (
              <div key={index}>
                <span className="card-genre-bestof">{genre}</span>
                {index !== displayedGenres.length - 1 && <Round />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
