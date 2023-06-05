import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./Home/Home";
import Layout from "./Margins/Layout";
import Game from "./Game/Game";
import Leaderboard from "./Leaderboard/Leaderboard";
import Info from "./Info/Info";
import { useState } from "react";

function App() {
  const [stageID, setStageID] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="leaderboard"
            element={<Leaderboard stageID={stageID} />}
          />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="/:id" element={<Game setStageID={setStageID} />} />
      </Routes>
    </div>
  );
}

export default App;
