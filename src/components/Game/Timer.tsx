import "./styles/Timer.css";

function Timer({ time }: { time: number }) {
  const seconds = time % 60;
  const minutes = (time - seconds) / 60;

  const timeString =
    String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, "0");

  return <div className="Timer">{timeString}</div>;
}

export default Timer;
