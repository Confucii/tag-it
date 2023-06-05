import "./styles/StageCard.css";
import Character from "../Character";
import { useNavigate } from "react-router-dom";

interface stageCardProps {
  id: number;
  name: string;
  stageImage: string;
  charInfo: { id: string; charName: string; charImage: string }[];
}

function StageCard({ id, name, stageImage, charInfo }: stageCardProps) {
  const navigator = useNavigate();

  function reroute(e: React.MouseEvent<HTMLElement>) {
    navigator(`${e.currentTarget.dataset.id}`);
  }
  return (
    <div
      data-id={`stage_${id}`}
      className="StageCard"
      style={{ backgroundImage: `url(${stageImage})` }}
      onClick={reroute}
    >
      <p className="stage-name">{name}</p>
      <div className="characters">
        {charInfo.map((char) => {
          return <Character key={char.charName} charInfo={char} />;
        })}
      </div>
    </div>
  );
}

export default StageCard;
