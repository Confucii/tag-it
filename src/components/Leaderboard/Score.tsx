import "./styles/Score.css";

function Score({ id, time, name }: { id: number; time: number; name: string }) {
  const seconds = time % 60;
  const minutes = (time - seconds) / 60;

  const timeString =
    String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, "0");

  return (
    <tr className="Score">
      <td className="score-table-body-data">{id + 1}</td>
      <td className="score-table-body-data">{name}</td>
      <td className="score-table-body-data">{timeString}</td>
    </tr>
  );
}

export default Score;
