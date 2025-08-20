import { Link, useLocation } from "react-router-dom";
import { FaUser, FaRegFileAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import "../index.css";

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
     
      <div className="sidebar-header">
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars size={18} />
        </button>
      </div>

      
      <div className="sidebar-profile-container">
        <img src="/profile.jpg" alt="profile" className="sidebar-profile" />
        <span className="sidebar-username">Tasmia Tabassum</span>
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