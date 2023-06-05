import "./styles/Leaderboard.css";

function Leaderboard({ stageID }: { stageID: number }) {
  return <div className="Leaderboard">{stageID}</div>;
}

export default Leaderboard;
