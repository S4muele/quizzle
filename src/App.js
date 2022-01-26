import React from "react"
import Game from "./components/Game"
import MainGame from "./components/MainGame"

export default function App() {

const [allData, setAllData] = React.useState("")

function startGame() {
  fetch("https://opentdb.com/api.php?amount=5&category=9")
        .then(res => res.json())
        .then(data => {

        const formattedGameData = data.results.map(dataEl => {
            const formattedQuestion = dataEl.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
            const formattedRightAnswer = dataEl.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, "&").replace(/&amp;/g, "&")
            const formattedWrongAnswers = dataEl.incorrect_answers.map(wrongAnswer => {
                return wrongAnswer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
            })
            return {
                ...dataEl,
                question: formattedQuestion,
                correct_answer: formattedRightAnswer,
                incorrect_answers: formattedWrongAnswers
            }
        })
 
            setAllData(formattedGameData)
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

