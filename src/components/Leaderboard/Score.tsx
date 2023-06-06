import "./styles/Score.css";

function Score({ id, time, name }: { id: number; time: number; name: string }) {
  return (
    <tr className="Score">
      <td className="score-table-body-data">{id + 1}</td>
      <td className="score-table-body-data">{name}</td>
      <td className="score-table-body-data">{time}</td>
    </tr>
  );
}

export default Score;
