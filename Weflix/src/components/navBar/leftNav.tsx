import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faGear,
  faMoon,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import { faDiscourse } from "@fortawesome/free-brands-svg-icons";

export default function LeftNav() {
  return (
    <nav className="container-nav-left">
      <div className="nav left">
        <div className="bloc-menu">
          <h4>Menu</h4>
          <ul>
            <li>
              <NavLink to="/discovery" activeClassName="active">
                <FontAwesomeIcon icon={faDiscourse} size="lg"/> Discovery
              </NavLink>
            </li>
            <li>
              <NavLink to="/top-rated" activeClassName="active">
                <FontAwesomeIcon icon={faStar} size="lg"/>
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink to="/coming-soon" activeClassName="active">
                <FontAwesomeIcon icon={faStopwatch} size="lg"/>
                Coming Soon
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bloc-library">
          <h4>Library</h4>
          <ul>
            <li>
              <NavLink to="/recent-played" activeClassName="active">
                <FontAwesomeIcon icon={faClock} size="lg"/>
                Recent Played
              </NavLink>
            </li>
            <li>
              <NavLink to="/download" activeClassName="active">
                <FontAwesomeIcon icon={faCloudArrowDown} size="lg"/>
                Download
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faMoon} size="lg"/>
              Dark Mode
            </li>
            <li>
                <NavLink to="/settings" activeClassName="active">
                    <FontAwesomeIcon icon={faGear} size="lg"/>
                    Setting
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
