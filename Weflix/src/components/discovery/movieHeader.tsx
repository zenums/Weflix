import { get } from "../../services/axios";
import { useQuery } from "react-query";
import Loading from "../loading/loading";
import Tag from "../tag/tag";
import Round from "../Round/round";
import Button from "../button/button";
import WatchlistIMG from "../../assets/watchlist.png";
import Play from "../../assets/play.png";

export default function MovieHeader() {

  const serieId: string = "60625";

  const { data: serie, isLoading } = useQuery(
    "movieHeader",
    () => get(`series/header/${serieId}`),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="container-header-movie"
      
    >
      <div className="header-movie-infos">
        <Tag variant="secondary">Series</Tag>
        <h3>{serie.name}</h3>
        <div className="tagline">
          {serie.number_of_seasons} Seasons <Round />
          {serie.number_of_episodes} Episodes <Round />
          fantastic <Round />
          netflix
        </div>
        <div className="container-btn">
          <Button variant="primary" size="large" color="red">
            <img src={Play} alt="" />
            Watch Thriller
          </Button>
          <Button variant="tertiary" size="large" color="white">
            <img src={WatchlistIMG} alt="" />
            Add Watchlist
          </Button>
        </div>
      </div>
    </div>
  );
}
