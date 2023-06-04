import "./styles/StageCard.css";
import Character from "../Character";

interface StageCardProps {
  name: string;
  stageImage: string;
  charInfo: { charName: string; charImage: string }[];
}

function StageCard({ name, stageImage, charInfo }: StageCardProps) {
  return (
    <div
      className="StageCard"
      style={{ backgroundImage: `url(${stageImage})` }}
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
