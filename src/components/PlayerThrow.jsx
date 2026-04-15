export default function PlayerThrow({ choices, playerChoice, onSelect, disabled }) {
  return (
    <div className="player-throw">
      {choices.map(choice => (
        <button
          key={choice}
          className={`choice-btn${playerChoice === choice ? ' selected' : ''}`}
          onClick={() => onSelect(choice)}
          disabled={disabled}
          aria-label={`Select ${choice}`}
        >
          <img src={`/images/${choice}.png`} alt={choice} />
          <span>{choice.charAt(0).toUpperCase() + choice.slice(1)}</span>
        </button>
      ))}
    </div>
  );
}
