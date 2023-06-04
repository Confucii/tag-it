import "./styles/StageCard.css";

interface StageCardProps {
  name: string;
  stageImage: string;
  charImages: string[];
}

function StageCard({ name, stageImage, charImages }: StageCardProps) {
  return <div className="StageCard"></div>;
}

export default StageCard;
