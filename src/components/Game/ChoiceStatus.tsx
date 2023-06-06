import "./styles/ChoiceStatus.css";

function ChoiceStatus({
  choiceStatusData,
}: {
  choiceStatusData: { bg: string; text: string };
}) {
  const { bg, text } = choiceStatusData;

  return (
    <div className="ChoiceStatus" style={{ backgroundColor: bg }}>
      {text}
    </div>
  );
}

export default ChoiceStatus;
