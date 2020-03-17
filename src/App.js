import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import Toolbar from "./components/Toolbar";

///////////////////////////////////////////////////

export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "https://steamuserimages-a.akamaihd.net/ugc/925934608366980377/5245DCACDC9336D3EAB1DC264A1A473A4603FCAA/",
  },
  paper: {
    name: "paper",
    url: "https://www.nicepng.com/png/full/160-1607883_grocery-bag-png-for-kids-plastic-bag-png.png",
  },
  rock: {
    name: "rock",
    url: "https://vignette.wikia.nocookie.net/monsterhunter/images/2/29/MH4-Hammer_Render_006.png/revision/latest/scale-to-width-down/340?cb=20140601034719",
  },
};


///////////////////////////////////////////////////
export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;
  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie!";
  return [result, computerChoice];
};
///////////////////////////////////////////////////

const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random() * 3);
  choiceNames = choiceNames[randomIndex];
  return CHOICES[choiceNames];
};

///////////////////////////////////////////////////

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [previousWinner, setPreviousWinner] = useState(null);


  //ONCLICK PLAYERCHOOSE
  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log('RESULT :', result)
    console.log('COMPUTER CHOICE :', compChoice)
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setGamePrompt(result);
    gameHistory.push(result);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }



    setGameHistory(gameHistory);
  };
  ///////////////////////////////////////////////////
  //SET GAME PROMPT
  const [prompt, setGamePrompt] = useState(":)");
  const [gameHistory, setGameHistory] = useState([]);

  return (
    <div className="App">
      <Toolbar />

      <div className="container mainSection">
        
        <div className="container">
        <ChoiceCard title="You" imgURL={playerChoice && playerChoice.url} previousWinner={previousWinner} />
        </div>
        <div className="container buttonSection">
        <h1>{prompt}</h1>
                <div>                <button
                  className="playButton btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("rock")}
                >
                  Rock
              </button></div>
                <div>                <button
                  className="playButton btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("paper")}
                >
                  Paper
              </button></div>
                <div>                <button
                  className="playButton btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("scissors")}
                >
                  Scissors
              </button></div>



          </div>
        <div className="container">
        <ChoiceCard title="Computer" imgURL={computerChoice && computerChoice.url} previousWinner={previousWinner} />
        </div>

        


        <div className="historySection">
          <h3 className="history">History:</h3>
          <ul>
            {gameHistory.map(result => {
              return <li>{result}</li>;
            })}
          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;

































{/* <div className="container">
          
<div className="row mb-3 cardholder">
  <div className="col-md-8 themed-grid-col">
    <ChoiceCard title="You" imgURL={playerChoice && playerChoice.url} previousWinner={previousWinner} />
    <h1>{prompt}</h1>


    <div className="container">
      <button
        className="btn btn-success btn-lg"
        onClick={() => onPlayerChoose("rock")}
      >
        Rock
    </button>
      <button
        className="btn btn-success btn-lg"
        onClick={() => onPlayerChoose("paper")}
      >
        Paper
    </button>
      <button
        className="btn btn-success btn-lg"
        onClick={() => onPlayerChoose("scissors")}
      >
        Scissors
    </button>
    </div>


    <ChoiceCard title="Computer" imgURL={computerChoice && computerChoice.url} previousWinner={previousWinner} />
  </div>
</div>
</div> */}