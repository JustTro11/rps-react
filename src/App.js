import React, { useState } from "react";

function App() {
  const [playerSelection, setPlayerSelection] = useState([]);
  const [results, setResults] = useState([]);

  const counterMap = {
    0: 1,
    1: 2,
    2: 0,
  };

  const handleButtonClick = (rps) => {
    setPlayerSelection([...playerSelection, rps]);

    setResults([...results, determineResult(rps)])
  };

  const determineResult = (rps) => {
    const compSelection = Math.floor(Math.random() * 3);

    if (counterMap[rps] === compSelection) {
      return "Player wins.";
    } else if (rps === compSelection) {
      return "Tie.";
    }
    return "Comp wins.";
  };

  return (
    <>
      {results.map((ele, i) => {
        if (ele != null) {
          return (
            <div key={ele + i}>
              {`Game ${i + 1} Result: ${ele}`}
            </div>
          );
        }
        return null;
      })}
      <button onClick={() => handleButtonClick(0)}>Rock</button>
      <button onClick={() => handleButtonClick(1)}>Paper</button>
      <button onClick={() => handleButtonClick(2)}>Scissors</button>
    </>
  );
}

export default App;
