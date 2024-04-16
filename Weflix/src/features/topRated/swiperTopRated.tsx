import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import CardMovieTopRated from "../../components/topRated/cardMovieTopRated";
import { moviesArraySchema } from "../../services/zod";
import { useQuery } from "react-query";
import { get } from "../../services/axios";
import { Movie } from "../../utils/type/movieType";
import Loading from "../../components/loading/loading";

export default function SwiperTopRated() {
  const { data: topMovies, isLoading } = useQuery(
    "topMovies",
    () => get("/movies/top-rated/10"),
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

  if (isLoading) return <Loading />;

  let counter = 0;

  return (
    <div className="container-top-rated">
      <h2 className="title-container">Top Rated</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, A11y]}
        navigation
      >
        {topMovies.map((movie: Movie, index: number) => {
          counter++;
          return (
            <SwiperSlide key={index}>
              <span className="number-movie">{counter}</span>
              <CardMovieTopRated
                url={movie.poster_path}
                adult={movie.adult}
                title={movie.original_title}
                vote={movie.vote_average}
                genres={movie.genre_ids.map(String)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
