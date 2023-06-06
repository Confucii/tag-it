import "./styles/Dropdown.css";
import { charCoordinates } from "../../firebase/firebase";
import { getCharData } from "../../firebase/firebase";

interface dropdownData {
  charData: {
    id: string;
    charName: string;
    charImage: string;
  }[];
  dropdownPosition: number[];
  setIsVisible: Function;
  setCharData: Function;
  setChoiceStatusData: Function;
}

function Dropdown({
  charData,
  dropdownPosition,
  setIsVisible,
  setCharData,
  setChoiceStatusData,
}: dropdownData) {
  async function handleChoice(e: React.MouseEvent<HTMLElement>) {
    const targetID = e.currentTarget.id;
    const charPos = await getCharData(targetID);
    let status = { text: "Try harder!", bg: "red", status: true };
    setIsVisible(false);
    if (verifyChoice(dropdownPosition[0], dropdownPosition[1], charPos)) {
      setCharData(charData.filter((char) => char.id !== targetID));
      status = { text: "You found it!", bg: "green", status: true };
    }
    setChoiceStatusData(status);
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
    <div
      className="Dropdown"
      style={{
        left: `${dropdownPosition[0]}%`,
        top: `${dropdownPosition[1]}%`,
      }}
    >
      <ul className="char-list">
        {charData.map((char) => (
          <li
            key={char.id}
            id={char.id}
            className="char-option"
            onClick={handleChoice}
          >
            {char.charName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
