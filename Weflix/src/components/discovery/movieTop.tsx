import { get } from "../../services/axios";
import { useQuery } from "react-query";
import Button from "../button/button";
import CardMovieTopRated from "../topRated/cardMovieTopRated";
import Tag from "../tag/tag";
import Loading from "../loading/loading";
import "./movieTop.css";
import MovieType from '../../utils/type/movieType';


export default function movieTop() {
  const { data: topMovies, isLoading } = useQuery(
    "topMovies",
    () => get("/movies/top-rated"),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  if (isLoading) return <Loading />;

  return (
    <div className="container-movieTopRated">
      <div className="container-movieTopRated-block1">
        <div className="container-card">
          <h2>Top Movies</h2>
          <div className="card-film">
            {topMovies.map((movie: MovieType, index: number) => {
              return (
                <CardMovieTopRated
                  key={index}
                  url={movie.poster_path}
                  adult={movie.adult}
                  title={movie.original_title}
                  vote={movie.vote_average}
                  genres={movie.genre_ids}
                />
              );
            })}
          </div>
        </div>
        <Button variant="secondary" size="large" color="red">
          See All
        </Button>
      </div>
      <div className="container-favoritesgenres">
        <h2>Favorites Genres</h2>
        <div className="favoritesgenres-tag">
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
          <Tag variant="primary">Lorem</Tag>
        </div>
      </div>
    </div>
  );
}
