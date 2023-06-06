import "./styles/Leaderboard.css";
import { stages } from "../stage-data";
import LeaderboardStageCard from "./LeaderboardStageCard";
import ScoreTable from "./ScoreTable";

function Leaderboard({
  stageID,
  setStageID,
}: {
  stageID: number;
  setStageID: Function;
}) {
  return (
    <div className="Leaderboard">
      <div className="stages">
        {stages.map((stage) => {
          return (
            <LeaderboardStageCard
              key={stage.id}
              setStageID={setStageID}
              id={stage.id}
              name={stage.name}
              stageImage={stage.stageImage}
            />
          );
        })}
      </div>
      <ScoreTable stageID={stageID} />
    </div>
  );
}

export default Leaderboard;
