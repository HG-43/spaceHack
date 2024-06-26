import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import BlogsList from "./pages/blogs/BlogsList";
import Blog from "./pages/blogs/Blog";
import WriteBlog from "./pages/blogs/WriteBlog";

function App() {
  const user = window.localStorage.getItem("userID");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={!user ? <Landing /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs/write" element={<WriteBlog />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
