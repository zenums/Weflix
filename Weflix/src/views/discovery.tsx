import SerieHeader from "../components/discovery/serieHeader"
import MovieTop from "../components/discovery/movieTop"
import '../components/discovery/discovery.css'

export default function Discovery() {
  return (
    <div className="discovery">
      <div className="bloc-main">
        <SerieHeader />
      </div>
      <div className="bloc-secondary"> 
        <MovieTop />
      </div>
    </div>
  )
}