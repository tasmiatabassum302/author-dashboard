import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          {/* Routes for Sidebar links */}
          <Routes>
            <Route path="/profile" element={<h2>Profile Page</h2>} />
            <Route path="/articles" element={<h2>My Articles Page</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
