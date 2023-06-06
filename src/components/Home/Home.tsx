import "./styles/Home.css";
import StageCard from "./StageCard";
import { stages } from "../stage-data";

function Home() {
  return (
    <div className="Home">
      {stages.map((stage) => {
        return (
          <StageCard
            key={stage.id}
            id={stage.id}
            name={stage.name}
            stageImage={stage.stageImage}
            charInfo={stage.charInfo}
          />
        );
      })}
    </div>
  );
}

export default Home;
