import { useQuery } from "react-query";
import { moviesArraySchema } from "../../services/zod";
import Loading from "../../components/loading/loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { get } from "../../services/axios";
import { Movie } from "../../utils/type/movieType";
import CardMovieBestof from "./cardMovieBestof";

export default function Bestof() {
  const { data: topMovies, isLoading } = useQuery(
    "topMovies",
    () => get("/movies/top-rated/20"),
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

  return (
    <div className="container-bestof">
      <h2 className="title-container">Best of Action</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, A11y]}
        navigation
      >
        {topMovies.map((movie: Movie, index: number) => {
          return (
            <SwiperSlide key={index}>
              <CardMovieBestof
                url={movie.poster_path}
                note={movie.vote_average}
                title={movie.original_title}
                genres={movie.genre_ids.map(String)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
