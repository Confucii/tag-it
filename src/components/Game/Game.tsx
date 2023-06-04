import { useParams } from "react-router-dom";
import { stages } from "../stage-data";
import "./styles/Game.css";
import GameHeader from "./GameHeader";

function Game() {
  const params = useParams();
  const stageID = Number(params.id?.slice(-1));

  return (
    <div className="Game">
      <GameHeader stageID={stageID} />
      <img
        src={stages[stageID].stageImage}
        alt="stage"
        className="stage-image"
      />
    </div>
  );
}

export default Game;
