import antiHeroes from "../images/anti-heroes.jpg";
import villains from "../images/villains.jpg";
import april from "../images/april.png";
import rick from "../images/pickle.png";
import ash from "../images/ash.png";
import deckard from "../images/deckard.png";
import mononoke from "../images/mononoke.png";
import eleven from "../images/eleven.png";

export const stages = [
  {
    id: 0,
    name: "Raid",
    stageImage: antiHeroes,
    charInfo: [
      { charName: "San (Princess Mononoke)", charImage: mononoke },
      { charName: "Rick Deckard (Blade Runner)", charImage: deckard },
      { charName: "Eleven (Stranger Things)", charImage: eleven },
    ],
  },
  {
    id: 1,
    name: "Raid 2",
    stageImage: villains,
    charInfo: [
      { charName: "Pickle Rick (Rick and Morty)", charImage: rick },
      { charName: "Ash (Evil Dead)", charImage: ash },
      { charName: "April O'Neil (Ninja Turtles)", charImage: april },
    ],
  },
];
