import { useParams } from "react-router-dom";
import { stages } from "../stage-data";
import "./styles/Game.css";
import GameHeader from "./GameHeader";
import { useState } from "react";
import Dropdown from "./Dropdown";

function Game() {
  const params = useParams();
  const stageID = Number(params.id?.slice(-1));
  const [dropdownPosition, setDropdownPosition] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const [charData, setCharData] = useState(
    stages[stageID].charInfo.map((char) => char)
  );

  async function handleDropdown(e: React.MouseEvent<HTMLElement>) {
    const parent = e.currentTarget.parentElement || {
      offsetLeft: 0,
      offsetTop: 0,
    };
    const xPos =
      ((e.clientX + document.documentElement.scrollLeft - parent.offsetLeft) /
        e.currentTarget.scrollWidth) *
      100;

    const yPos =
      ((e.clientY + document.documentElement.scrollTop - parent.offsetTop) /
        e.currentTarget.scrollHeight) *
      100;

    setDropdownPosition([xPos, yPos]);
    setIsVisible(!isVisible);
  }

  return (
    <div className="Game">
      <GameHeader charData={charData} />
      <div className="stage">
        {isVisible && (
          <Dropdown
            dropdownPosition={dropdownPosition}
            charData={charData}
            setIsVisible={setIsVisible}
            setCharData={setCharData}
          />
        )}
        <img
          src={stages[stageID].stageImage}
          alt="stage"
          className="stage-image"
          onClick={handleDropdown}
        />
      </div>
    </div>
  );
}

export default Game;
