// import { get } from "../../../../services/axios";
// import { useQuery } from "react-query";
import Button from "../button/button";
import CardMovieTopRated from "../topRated/cardMovieTopRated";
import Tag from "../tag/tag";
import "./movieTop.css";

export default function movieTop() {
  // const { data: movieTopRated, isLoading } = useQuery(
  //   "movieHeader",
  //   () => get(`series/header`),
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //     onError: (error) => {
  //       console.error(error);
  //     },
  //   }
  // );

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="container-movieTopRated">
      <div>
        <div className="container-card">
          <h2>Top Movies</h2>
          <div>
            <CardMovieTopRated />
          </div>
        </div>
        <Button variant="secondary" size="large" color="red">
          See All
        </Button>
      </div>
      <div>
        <h2>Favorites Genres</h2>
        <Tag variant="primary">X</Tag>
      </div>
    </div>
  );
}
