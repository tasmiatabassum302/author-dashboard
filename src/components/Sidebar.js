import { Link, useLocation } from "react-router-dom";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import "../index.css";

export default function Sidebar() {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <div className="sidebar-profile-container">
        <img src="/profile.jpg" alt="profile" className="sidebar-profile" />
        <span className="sidebar-username">Tasmia</span>
      </div>

      <ul>
        <li>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active-link" : ""}
          >
            <FaUser className="icon" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            className={location.pathname === "/articles" ? "active-link" : ""}
          >
            <FaRegFileAlt className="icon" />
            <span>My Articles</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
