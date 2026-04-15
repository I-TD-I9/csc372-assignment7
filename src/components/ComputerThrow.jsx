export default function ComputerThrow({ animatedChoice, computerChoice, isAnimating }) {
  let imgSrc, altText, label;

  if (isAnimating) {
    const display = animatedChoice || 'question';
    imgSrc = `/images/${display}.png`;
    altText = animatedChoice ? `Shuffling: ${animatedChoice}` : 'Shuffling...';
    label = animatedChoice
      ? animatedChoice.charAt(0).toUpperCase() + animatedChoice.slice(1)
      : '...';
  } else if (computerChoice) {
    imgSrc = `/images/${computerChoice}.png`;
    altText = computerChoice;
    label = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  } else {
    imgSrc = '/images/question.png';
    altText = 'Waiting for computer choice';
    label = 'Waiting...';
  }

  return (
    <div className="computer-throw">
      <img src={imgSrc} alt={altText} />
      <span>{label}</span>
    </div>
  );
}
