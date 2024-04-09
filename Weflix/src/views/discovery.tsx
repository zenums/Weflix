import SerieHeader from "../components/discovery/serieHeader"
import MovieTopRated from "../components/discovery/movieTopRated"
import '../components/discovery/discovery.css'

export default function Discovery() {
  return (
    <div className="discovery">
      <div className="bloc-main">
        <SerieHeader />
      </div>
      <div className="bloc-secondary"> 
        <MovieTopRated />
      </div>
    </div>
  )
}