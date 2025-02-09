import React, { useState, useEffect } from 'react';
import './CowsandBulls.css';
function CowsAndBulls() {
  const [secretNumber, setSecretNumber] = useState('');
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    generateSecretNumber();
  }, []);

  const generateSecretNumber = () => {
    let num = '';
    while (num.length < 4) {
      const digit = Math.floor(Math.random() * 10);
      if (!num.includes(digit)) {
        num += digit;
      }
    }
    setSecretNumber(num);
    console.log("Secret Number:", num); // For debugging
  };

  const handleGuessChange = (e) => {
    const input = e.target.value;
    // Allow only digits and limit to 4 characters
    const validGuess = input.replace(/[^0-9]/g, '').slice(0, 4);  
    setGuess(validGuess);
  };

  const handleGuessSubmit = () => {
    if (guess.length !== 4) {
      setMessage("Please enter a 4-digit number.");
      return;
    }

    if (new Set(guess).size !== 4) {
        setMessage("Please enter a number with unique digits.");
        return;
    }


    const cowsAndBulls = calculateCowsAndBulls(guess, secretNumber);
    setGuesses([...guesses, { guess, ...cowsAndBulls }]);

    if (cowsAndBulls.cows === 4) {
      setMessage(`You won! The number was ${secretNumber}.`);
      setGameOver(true);
    } else {
      setMessage(`Cows: ${cowsAndBulls.cows}, Bulls: ${cowsAndBulls.bulls}`);
    }

    setGuess(''); // Clear input field
  };

  const calculateCowsAndBulls = (guess, secret) => {
    let cows = 0;
    let bulls = 0;
    const secretArray = secret.split(''); // Easier comparison
    const guessArray = guess.split('');

    for (let i = 0; i < 4; i++) {
      if (guessArray[i] === secretArray[i]) {
        bulls++;
      } else if (secretArray.includes(guessArray[i])) {
        cows++;
      }
    }
    return { cows, bulls };
  };

  const handleNewGame = () => {
    generateSecretNumber();
    setGuesses([]);
    setMessage('');
    setGameOver(false);
    setGuess('');
  };

  return (
    <div className="game-container"> {/* Main container */}
      <h1 className="Cbh1">Cows and Bulls</h1>
      <button onClick={handleNewGame} className="new-game-button">New Game</button>
      <p className="message">{message}</p> {/* Message area */}
      {gameOver && <p className="win-message">Congratulations!</p>}
      {!gameOver && (
        <div className="input-area"> {/* Input area */}
          <input type="text" value={guess} onChange={handleGuessChange} maxLength="4" className="guess-input" />
          <button onClick={handleGuessSubmit} className="submit-button">Submit Guess</button>
        </div>
      )}
      <h2>Guesses:</h2>
      <ul className="guesses-list"> {/* Guesses list */}
        {guesses.map((g, index) => (
          <li key={index} className="guess-item"> {/* Individual guess item */}
            {g.guess} - Cows: {g.cows}, Bulls: {g.bulls}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CowsAndBulls;