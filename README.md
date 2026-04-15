# CSC372 Assignment 7 – Rock Paper Scissors (React)

A Rock Paper Scissors game built with React and Vite.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## How to Play

1. Click **Rock**, **Paper**, or **Scissors** to make your throw.
2. The computer's side will shuffle through choices for 3 seconds before revealing its pick.
3. The result (Win / Lose / Tie) is displayed below the board.
4. The scoreboard tracks your wins, ties, and losses across rounds.
5. Click **Reset Game** to start over and clear the score.

## Project Structure

```
src/
  App.jsx                  # Root component — game state and logic
  App.module.css
  main.jsx
  index.css
  components/
    PlayerThrow.jsx        # Clickable throw selection with highlight
    PlayerThrow.module.css
    ComputerThrow.jsx      # Animated reveal of computer's choice
    ComputerThrow.module.css
    ResultDisplay.jsx      # Win / Lose / Tie outcome display
    ResultDisplay.module.css
    ScoreBoard.jsx         # Running score tracker
    ScoreBoard.module.css
    ResetButton.jsx        # Resets game state and score
    ResetButton.module.css
public/
  images/
    rock.svg
    paper.svg
    scissors.svg
    question.svg
```

## Reflection

This assignment reinforced how React's component model and unidirectional data flow keep UI logic clean. Lifting state up to `App` made it straightforward to coordinate the player selection, animation timer, and score updates without any sibling components needing to communicate directly. Using `useEffect` with a `setInterval` / `setTimeout` pair for the shuffle animation was a good exercise in cleanup — returning the `clearInterval` + `clearTimeout` from the effect ensures no stale timers fire if the component unmounts or the effect re-runs. CSS Modules kept styles scoped per component with no naming collisions.
