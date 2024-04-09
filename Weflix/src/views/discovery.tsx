import MovieHeader from "../components/discovery/movieHeader"
import MovieTopRated from "../components/discovery/movieTopRated"
import '../components/discovery/discovery.css'

export default function Discovery() {
  return (
    <div className="discovery">
      <div className="bloc-main">
        <MovieHeader />
      </div>
      <div className="bloc-secondary"> 
        <MovieTopRated />
      </div>
    </div>
  )
}