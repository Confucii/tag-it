import "./styles/Home.css";
import antiHeroes from "../../images/anti-heroes.jpg";
import villains from "../../images/villains.jpg";
import charImg from "../../images/account.svg";
import StageCard from "./StageCard";

function Home() {
  return (
    <div className="Home">
      <StageCard
        name="Raid"
        stageImage={antiHeroes}
        charInfo={[
          { charName: "Char1", charImage: charImg },
          { charName: "Char2", charImage: charImg },
          { charName: "Char3", charImage: charImg },
        ]}
      />
      <StageCard
        name="Raid 2"
        stageImage={villains}
        charInfo={[
          { charName: "Char1", charImage: charImg },
          { charName: "Char2", charImage: charImg },
          { charName: "Char3", charImage: charImg },
        ]}
      />
    </div>
  );
}

export default Home;
