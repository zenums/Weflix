import Pegi from '../pegi/pegi'
import CinemaIcon from "../../assets/film.png";
import Round from "../Round/round";
import testaffiche from "../../assets/image/Rick-et-Morty.jpg"
import Star from "../../assets/star.png"
import "./cardMovieTopRated.css";

export default function CardMovieTopRated() {
  return (
    <div className='card-movietoprated'>
      <img className='movietoprated-affiche' src={testaffiche} alt="" />
      <div>
        <Pegi> PG-13 </Pegi>
        <h3>Rick et Morty</h3>
        <div className='cointainer-genre'>
            <img src={CinemaIcon} alt="cinema icons" /> 
            <span className='affiche-genre'>Science fiction </span>
            <Round/>
            <span className='affiche-genre'>Comédie</span>
        </div>
        <div>
            <img src={Star} alt="" />
            <p>9.0</p>
        </div>
      </div>
    </div>
  )
}
