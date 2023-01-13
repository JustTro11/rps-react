import React, { useState } from "react";

function App() {
  const [playerSelection, setPlayerSelection] = useState(null);
  
  const compSelection = Math.floor(Math.random() * 3);

  const counterMap = {
    0: 1,
    1: 2,
    2: 0,
  };

  const determineResult = () => {
    if (counterMap[playerSelection] === compSelection) {
      return "Player wins.";
    } else if (playerSelection === compSelection) {
      return "Tie.";
    }
    return "Comp wins.";
  };
  return (
    <>
      <div>Result: {playerSelection != null && determineResult()}</div>
      <button onClick={() => setPlayerSelection(0)}>Rock</button>
      <button onClick={() => setPlayerSelection(1)}>Paper</button>
      <button onClick={() => setPlayerSelection(2)}>Scissors</button>
    </>
  );
}

export default App;
