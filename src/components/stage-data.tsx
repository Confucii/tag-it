import antiHeroes from "../images/anti-heroes.jpg";
import villains from "../images/villains.jpg";
import charImg from "../images/account.svg";

export const stages = [
  {
    id: 0,
    name: "Raid",
    stageImage: antiHeroes,
    charInfo: [
      { charName: "Char1", charImage: charImg },
      { charName: "Char2", charImage: charImg },
      { charName: "Char3", charImage: charImg },
    ],
  },
  {
    id: 1,
    name: "Raid 2",
    stageImage: villains,
    charInfo: [
      { charName: "Char1", charImage: charImg },
      { charName: "Char2", charImage: charImg },
      { charName: "Char3", charImage: charImg },
    ],
  },
];
