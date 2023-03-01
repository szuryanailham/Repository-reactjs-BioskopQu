import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Movie from "./Component/Movie";
import MovieDetail from "./Component/MovieDetail";
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-items">
          <Link className="nav-item logo" to="/">
            BioskopQu
          </Link>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/movie">
            Movie
          </Link>
          <div className="login-item">
            <Link className="nav-item" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
