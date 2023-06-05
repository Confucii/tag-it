import { useState } from "react";
import "./styles/Modal.css";
import { useNavigate } from "react-router-dom";
import { addScore } from "../../firebase/firebase";

function Modal({ stageID, time }: { stageID: number; time: number }) {
  const [playerName, setPlayerName] = useState("");
  const navigator = useNavigate();

  function handleClick() {
    document.body.style.overflow = "auto";
    navigator(`../leaderboard`);
    addScore(playerName, `leaderboard_${stageID}`, time);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const saveBtn = document.querySelector(".save-btn") as HTMLElement;
    saveBtn.click();
  }

  return (
    <div className="Modal">
      <div className="overlay" />
      <div className="game-over">
        <form onSubmit={handleSubmit} className="leaderboard-form">
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
          <button type="button" className="save-btn" onClick={handleClick}>
            Save score
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
