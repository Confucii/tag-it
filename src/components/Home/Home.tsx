import "./styles/Home.css";
import StageCard from "./StageCard";
import { stages } from "../stage-data";

function Home() {
  return (
    <div className="Home">
      <StageCard
        id={stages[0].id}
        name={stages[0].name}
        stageImage={stages[0].stageImage}
        charInfo={stages[0].charInfo}
      />
      <StageCard
        id={stages[1].id}
        name={stages[1].name}
        stageImage={stages[1].stageImage}
        charInfo={stages[1].charInfo}
      />
    </div>
  );
}

export default Home;
