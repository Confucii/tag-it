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
}

function Dropdown({
  charData,
  dropdownPosition,
  setIsVisible,
  setCharData,
}: dropdownData) {
  async function handleChoice(e: React.MouseEvent<HTMLElement>) {
    const targetID = e.currentTarget.id;
    const charPos = await getCharData(targetID);
    setIsVisible(false);
    if (verifyChoice(dropdownPosition[0], dropdownPosition[1], charPos)) {
      setCharData(charData.filter((char) => char.id !== targetID));
    }
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
