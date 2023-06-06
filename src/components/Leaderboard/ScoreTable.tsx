import "./styles/ScoreTable.css";
import { getScores } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { scoreData } from "../../firebase/firebase";
import Score from "./Score";

function ScoreTable({ stageID }: { stageID: number }) {
  const [scores, setScores] = useState<scoreData[]>([]);

  useEffect(() => {
    async function scores(stageID: number) {
      const scoreData = await getScores(stageID);
      setScores(scoreData);
    }
    scores(stageID);
  }, [stageID]);

  return (
    <table className="ScoreTable">
      <thead className="score-table-header">
        <tr className="score-table-header-row">
          <th className="score-table-header-data">Place</th>
          <th className="score-table-header-data">Name</th>
          <th className="score-table-header-data">Time</th>
        </tr>
      </thead>
      <tbody className="score-table-body">
        {scores.map((score, id) => {
          return <Score key={id} id={id} name={score.name} time={score.time} />;
        })}
      </tbody>
    </table>
  );
}

export default ScoreTable;
