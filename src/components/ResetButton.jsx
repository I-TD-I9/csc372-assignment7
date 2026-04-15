export default function ResetButton({ onReset }) {
  return (
    <button className="reset-btn" onClick={onReset} aria-label="Reset game and score">
      Reset Game
    </button>
  );
}
