import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/logo.png";
import Button from "../button/button";
import notification from "../../assets/profile/icon-notification.png";
import search from "../../assets/nav/search.png";

export default function topNav() {
  return (
    <nav className="nav top">
      <div className="bloc-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="link-views">
        <NavLink to="/movies" className="link">Films</NavLink>
        <NavLink to="/series" className="link">Series</NavLink>
        <NavLink to="/animations" className="link">Animation</NavLink>
        <NavLink to="/genres" className="link">Genres</NavLink>
      </div>
      <div className="bloc-search">
        <input type="search" name="search" id="" />
        <img src={search} alt="" />
      </div>
      <div className="bloc-profile">
        <Button variant="primary" size="medium" color="red" padding={'7px 25px'}>Connexion</Button>
        <img src={notification} alt="notification" />
      </div>
    </nav>
  );
}
