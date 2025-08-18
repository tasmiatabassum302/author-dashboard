import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Articles from "./components/Articless";

function Layout() {
  const location = useLocation();

  const contentClass =
    location.pathname === "/profile" ? "content profile-page" : "content";

  return (
    <div className="container">
      <Sidebar />
      <div className={contentClass}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;




