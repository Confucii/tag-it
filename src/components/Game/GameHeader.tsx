import "./styles/GameHeader.css";
import Character from "../Character";
import Timer from "./Timer";

interface charData {
  charData: {
    id: string;
    charName: string;
    charImage: string;
  }[];
}

function GameHeader({ charData }: charData) {
  return (
    <div className="GameHeader">
      <Timer />
      <div className="game-characters">
        {charData.map((char) => {
          return <Character key={char.charName} charInfo={char} />;
        })}
      </div>
    </div>
  );
}

export default GameHeader;
