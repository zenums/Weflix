import { get } from "../../services/axios";
import { useQuery } from "react-query";
import Button from "../../components/button/button";
import CardMovieTopRated from "../../components/topRated/cardMovieTopRated";
import Tag from "../../components/tag/tag";
import Loading from "../../components/loading/loading";
import "./movieTop.css";
import { Movie } from "../../utils/type/movieType";
import { Genre } from "../../utils/type/genreType";
import { moviesArraySchema, genresArraySchema } from "../../services/zod";

export default function MovieTop() {
  const { data: topMovies, isLoading } = useQuery(
    "topMovies",
    () => get("/movies/top-rated/3"),
    {
      onSuccess: (data) => {
        try {
          moviesArraySchema.parse(data);
        } catch (error) {
          console.error("Erreur de validation des films:", error);
        }
      },
    }
  );

  const { data: genres } = useQuery("genre", () => get("/genres/movies"), {
    onSuccess: (data) => {
      try {
        genresArraySchema.parse(data);
      } catch (error) {
        console.error("Erreur de validation des genres:", error);
      }
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container-movieTopRated">
      <div className="container-movieTopRated-block1">
        <div className="container-card">
          <h2>Top Movies</h2>
          <div className="card-film">
            {topMovies.map((movie: Movie, index: number) => {
              return (
                <CardMovieTopRated
                  key={index}
                  url={movie.poster_path}
                  adult={movie.adult}
                  title={movie.original_title}
                  vote={movie.vote_average}
                  genres={movie.genre_ids.map(String)}
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
          {genres.map((genre: Genre, index: number) => {
            return (
              <Tag variant="secondary" key={index}>
                {String(genre.name)}
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
  );
}
