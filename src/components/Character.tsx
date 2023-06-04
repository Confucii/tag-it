import "./styles/Character.css";

interface charData {
  charInfo: { charName: string; charImage: string };
}

function Character({ charInfo }: charData) {
  const { charName, charImage } = charInfo;

  return (
    <div className="Character">
      <img src={charImage} alt={charName} className="char-img" />
      <p className="char-name">{charName}</p>
    </div>
  );
}

export default Character;
