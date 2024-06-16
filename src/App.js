import Memes from "./Memes/Meme";
import "./styles.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";
import Login from "./components/Login";
import Team from "./components/Team";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Memes />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
