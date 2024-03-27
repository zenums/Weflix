import Link  from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faGear,
  faMoon,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons";

export default function LeftNav() {
  return (
    <nav className="container-nav-left">
      <div className="nav left">
        <div className="bloc-menu">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faDiscourse} size="lg" />
                Discovery
              </Link>
            </li>
            <li>
              <Link to="/top-rated">
                <FontAwesomeIcon icon={faStar} size="lg" />
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">
                <FontAwesomeIcon icon={faStopwatch} size="lg" />
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="bloc-library">
          <h4>Library</h4>
          <ul>
            <li>
              <Link to="/recent-played">
                <FontAwesomeIcon icon={faClock} size="lg" />
                Recent Played
              </Link>
            </li>
            <li>
              <Link to="/download">
                <FontAwesomeIcon icon={faCloudArrowDown} size="lg" />
                Download
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faMoon} size="lg" />
              Dark Mode
            </li>
            <li>
              <Link to="/settings">
                <FontAwesomeIcon icon={faGear} size="lg" />
                Setting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
