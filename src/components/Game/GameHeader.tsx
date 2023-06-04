import "./styles/GameHeader.css";
import Character from "../Character";
import Timer from "./Timer";
import { stages } from "../stage-data";

interface stageData {
  stageID: number;
}

function GameHeader({ stageID }: stageData) {
  return (
    <div className="GameHeader">
      <Timer />
      <div className="game-characters">
        {stages[stageID].charInfo.map((char) => {
          return <Character key={char.charName} charInfo={char} />;
        })}
      </div>
    </div>
  );
}

export default GameHeader;
