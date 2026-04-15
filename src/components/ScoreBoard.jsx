export default function ScoreBoard({ score }) {
  return (
    <section className="score-board" aria-label="Score board">
      <div className="score-item">
        <span className="label">Wins</span>
        <span className="value">{score.wins}</span>
      </div>
      <div className="score-item">
        <span className="label">Ties</span>
        <span className="value">{score.ties}</span>
      </div>
      <div className="score-item">
        <span className="label">Losses</span>
        <span className="value">{score.losses}</span>
      </div>
    </section>
  );
}
