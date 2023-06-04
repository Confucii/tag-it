import { useEffect, useState } from "react";
import "./styles/Timer.css";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((x) => (x += 1));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const seconds = time % 60;
  const minutes = (time - seconds) / 60;

  const timeString =
    String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, "0");

  return <div className="Timer">{timeString}</div>;
}

export default Timer;
