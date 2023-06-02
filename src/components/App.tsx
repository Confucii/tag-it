import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./Home/Home";
import Layout from "./Margins/Layout";
import Game from "./Game/Game";
import Leaderboard from "./Leaderboard/Leaderboard";
import Info from "./Info/Info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
