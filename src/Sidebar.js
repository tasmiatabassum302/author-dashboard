import { Link } from "react-router-dom";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import "./index.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile-container">
        {/* Make sure profile.jpg exists inside public/ folder */}
        <img src="/profile.jpg" alt="profile" className="sidebar-profile" />
        <span className="sidebar-username">Tasmia</span>
      </div>

      <ul>
        <li>
          <Link to="/profile">
            <FaUser className="icon" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <FaRegFileAlt className="icon" />
            <span>My Articles</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
