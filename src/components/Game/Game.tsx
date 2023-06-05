import { useParams } from "react-router-dom";
import { stages } from "../stage-data";
import "./styles/Game.css";
import GameHeader from "./GameHeader";
import { charCoordinates } from "../../firebase/firebase";
import { getCharData } from "../../firebase/firebase";

function Game() {
  const params = useParams();
  const stageID = Number(params.id?.slice(-1));

  async function printCoordinates(e: React.MouseEvent<HTMLElement>) {
    const xPos =
      ((e.clientX +
        document.documentElement.scrollLeft -
        e.currentTarget.offsetLeft) /
        e.currentTarget.scrollWidth) *
      100;

    const yPos =
      ((e.clientY +
        document.documentElement.scrollTop -
        e.currentTarget.offsetTop) /
        e.currentTarget.scrollHeight) *
      100;

    const charPos = await getCharData("april");

    console.log(verifyChoice(xPos, yPos, charPos));
  }

  function verifyChoice(xPos: number, yPos: number, charPos: charCoordinates) {
    return (
      charPos?.xStart < xPos &&
      charPos?.xEnd > xPos &&
      charPos?.yStart < yPos &&
      charPos?.yEnd > yPos
    );
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
