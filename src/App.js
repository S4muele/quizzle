import React from "react"
import MainGame from "./components/MainGame"

export default function App() {

const [allData, setAllData] = React.useState("")

function startGame() {
  fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
        .then(res => res.json())
        .then(data => {

          const decodedGameData = data.results.map(dataEl => {
            const decodedQuestion = decodeURIComponent(dataEl.question)
            const decodedRightAnswer = decodeURIComponent(dataEl.correct_answer)
            const decodedWrongAnswers = dataEl.incorrect_answers.map(wrongAnswer => {
                return decodeURIComponent(wrongAnswer)
            })
            return {
                ...dataEl,
                question: decodedQuestion,
                correct_answer: decodedRightAnswer,
                incorrect_answers: decodedWrongAnswers
            }
        })
 
            setAllData(decodedGameData)
        })
}

  return (
    <main>
      {allData ? 
        <MainGame gameData={allData} startGame={startGame}/> 
        : 
        <div className="start-game-container">
          <h1>Quizzle?</h1>
          <p className="instructions">
            Hit the button below to get started!
          </p>
          <button className="start-button" onClick={startGame}>Start game</button>
        </div>
      }
    </main>
    )
}

