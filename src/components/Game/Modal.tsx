import { useState } from "react";
import "./styles/Modal.css";
import { useNavigate } from "react-router-dom";

function Modal({ stageID }: { stageID: number; time: number }) {
  const [playerName, setPlayerName] = useState("");
  const navigator = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    document.body.style.overflow = "auto";
    navigator(`../leaderboard`);
  }

  return (
    <div className="Modal">
      <div className="overlay" />
      <div className="game-over">
        <form className="leaderboard-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setPlayerName(e.currentTarget.value);
            }}
            value={playerName}
          />
          <button type="button" onClick={handleClick}>
            Save score
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
