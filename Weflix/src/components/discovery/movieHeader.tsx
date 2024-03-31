import { get } from "../../services/axios";
import { useQuery } from "react-query";
import Loading from "../loading/loading";

export default function MovieHeader() {


   const { data: movie, isLoading } = useQuery("movieHeader", () => get("movies/header"), {
    onSuccess: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.error(error);
    },
   }); 
   
    if (isLoading) {
     return <Loading />;
    }

  return (
    <div className="container-header-movie">
        <div className="header-movie">

            <div className="header-movie-infos">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    </div>
  )
}