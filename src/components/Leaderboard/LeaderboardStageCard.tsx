import "./styles/LeaderboardStageCard.css";

interface leaderboardCardProps {
  id: number;
  name: string;
  stageImage: string;
  setStageID: Function;
}

function LeaderboardStageCard({
  id,
  name,
  stageImage,
  setStageID,
}: leaderboardCardProps) {
  return (
    <div
      className="LeaderboardStageCard"
      style={{ backgroundImage: `url(${stageImage})` }}
      onClick={() => setStageID(id)}
    >
      <p className="leaderboard-stage-name">{name}</p>
    </div>
  );
}

export default LeaderboardStageCard;
