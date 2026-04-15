const MESSAGES = {
  win: 'You Win!',
  lose: 'You Lose!',
  tie: "It's a Tie!",
};

export default function ResultDisplay({ result, playerChoice, computerChoice }) {
  if (!result) return null;

  return (
    <section className="result">
      <p className="outcome">{MESSAGES[result]}</p>
      <p className="detail">
        {playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} vs{' '}
        {computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}
      </p>
    </section>
  );
}
