import { useParams } from "react-router-dom";
import { stages } from "../stage-data";
import "./styles/Game.css";
import GameHeader from "./GameHeader";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import ChoiceStatus from "./ChoiceStatus";

function Game({ setStageID }: { setStageID: Function }) {
  const params = useParams();
  const stageID = Number(params.id?.slice(-1));
  const [dropdownPosition, setDropdownPosition] = useState([0, 0]);
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [charData, setCharData] = useState(
    stages[stageID].charInfo.map((char) => char)
  );
  const [choiceStatusData, setChoiceStatusData] = useState({
    bg: "",
    text: "",
    status: false,
  });
  const [time, setTime] = useState(0);
  const timeIntervalRef = useRef<ReturnType<typeof setInterval>>();
  const choiceStatusTimeoutRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timeIntervalRef.current = setInterval(() => {
      setTime((x) => (x += 1));
    }, 1000);
    setStageID(stageID);
    return () => {
      clearInterval(timeIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (choiceStatusTimeoutRef.current) {
      clearInterval(choiceStatusTimeoutRef.current);
    }

    choiceStatusTimeoutRef.current = setTimeout(() => {
      setChoiceStatusData({ ...choiceStatusData, status: false });
      choiceStatusTimeoutRef.current = undefined;
    }, 3000);
  }, [choiceStatusData]);

  if (charData.length === 0) {
    document.body.style.overflow = "hidden";
    clearInterval(timeIntervalRef.current);
  }

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
    setDropdownIsVisible(!dropdownIsVisible);
  }

  return (
    <div className="Game">
      {charData.length === 0 && <Modal stageID={stageID} time={time} />}
      <GameHeader charData={charData} time={time} />
      <div className="stage">
        {choiceStatusData.status && (
          <ChoiceStatus choiceStatusData={choiceStatusData} />
        )}
        {dropdownIsVisible && (
          <Dropdown
            setChoiceStatusData={setChoiceStatusData}
            dropdownPosition={dropdownPosition}
            charData={charData}
            setIsVisible={setDropdownIsVisible}
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
