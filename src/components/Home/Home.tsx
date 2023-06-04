import "./styles/Home.css";
import antiHeroes from "../../images/anti-heroes.jpg";
import villains from "../../images/villains.jpg";
import StageCard from "./StageCard";

function Home() {
  return (
    <div className="Home">
      <StageCard name="Raid" stageImage={antiHeroes} charImages={[]} />
      <StageCard name="Raid 2" stageImage={villains} charImages={[]} />
    </div>
  );
}

export default Home;
