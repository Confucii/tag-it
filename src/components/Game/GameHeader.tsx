import "./styles/GameHeader.css";
import Character from "../Character";
import Timer from "./Timer";

interface charData {
  charData: {
    id: string;
    charName: string;
    charImage: string;
  }[];
  time: number;
}

function GameHeader({ charData, time }: charData) {
  return (
    <div className="GameHeader">
      <Timer time={time} />
      <div className="game-characters">
        {charData.map((char) => {
          return <Character key={char.charName} charInfo={char} />;
        })}
      </div>
    </div>
  );
}

export default GameHeader;
