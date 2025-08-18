import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "./Profile"; 
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles" element={<h2>My Articles Page</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

