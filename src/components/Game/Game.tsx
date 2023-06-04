import { useParams } from "react-router-dom";
import { stages } from "../stage-data";
import "./styles/Game.css";
import GameHeader from "./GameHeader";

function Game() {
  const params = useParams();
  const stageID = Number(params.id?.slice(-1));

  function printCoordinates(e: React.MouseEvent<HTMLElement>) {
    console.log(`X: ${document.documentElement.scrollHeight}`);
    console.log(`Y: ${document.documentElement.scrollWidth}`);
  }

  return (
    <div className="Game">
      <GameHeader stageID={stageID} />
      <img
        src={stages[stageID].stageImage}
        alt="stage"
        className="stage-image"
        onClick={printCoordinates}
      />
    </div>
  );
}

export default Game;
