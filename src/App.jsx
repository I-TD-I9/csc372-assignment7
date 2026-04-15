import { useState, useEffect } from 'react';
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';
import ResultDisplay from './components/ResultDisplay';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import './App.css';

const CHOICES = ['rock', 'paper', 'scissors'];

function getResult(player, computer) {
  if (player === computer) return 'tie';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [animatedChoice, setAnimatedChoice] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  useEffect(() => {
    if (!isAnimating || !playerChoice) return;

    let index = 0;
    const interval = setInterval(() => {
      setAnimatedChoice(CHOICES[index % CHOICES.length]);
      index++;
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      const compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
      setComputerChoice(compChoice);
      setAnimatedChoice(null);
      setIsAnimating(false);
      const res = getResult(playerChoice, compChoice);
      setResult(res);
      setScore(prev => ({
        wins: prev.wins + (res === 'win' ? 1 : 0),
        losses: prev.losses + (res === 'lose' ? 1 : 0),
        ties: prev.ties + (res === 'tie' ? 1 : 0),
      }));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isAnimating, playerChoice]);

  function handleSelect(choice) {
    if (isAnimating) return;
    setPlayerChoice(choice);
    setComputerChoice(null);
    setAnimatedChoice(null);
    setResult(null);
    setIsAnimating(true);
  }

  function handleReset() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setAnimatedChoice(null);
    setResult(null);
    setIsAnimating(false);
    setScore({ wins: 0, losses: 0, ties: 0 });
  }

  return (
    <main className="app">
      <h1>Rock Paper Scissors</h1>
      <ScoreBoard score={score} />
      <section className="game" aria-label="Game board">
        <div className="side">
          <h2>Your Throw</h2>
          <PlayerThrow
            choices={CHOICES}
            playerChoice={playerChoice}
            onSelect={handleSelect}
            disabled={isAnimating}
          />
        </div>
        <div className="vs" aria-hidden="true">VS</div>
        <div className="side">
          <h2>Computer&apos;s Throw</h2>
          <ComputerThrow
            animatedChoice={animatedChoice}
            computerChoice={computerChoice}
            isAnimating={isAnimating}
          />
        </div>
      </section>
      <ResultDisplay result={result} playerChoice={playerChoice} computerChoice={computerChoice} />
      <ResetButton onReset={handleReset} />
    </main>
  );
}
