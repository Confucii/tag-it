import "./styles/Character.css";

interface charData {
  charInfo: { id: string; charName: string; charImage: string };
}

function Character({ charInfo }: charData) {
  const { id, charName, charImage } = charInfo;

  return (
    <div id={id} className="Character">
      <img src={charImage} alt={charName} className="char-img" />
      <p className="char-name">{charName}</p>
    </div>
  );
}

export default Character;
