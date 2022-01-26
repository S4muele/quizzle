import React from "react"
import { nanoid } from 'nanoid'
import QuestionX from "./QuestionX"

export default function Game({gameData}) {

    const [correctAnswers, setCorrectAnswers] = React.useState([])

    console.log(correctAnswers)

    const formattedGameData = gameData.map(question => {
        const formattedQuestion = question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        const formattedRightAnswer = question.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        const formattedWrongAnswers = question.incorrect_answers.map(wrongAnswer => {
            return wrongAnswer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        })
    
        return {
            ...question,
            question: formattedQuestion,
            correct_answer: formattedRightAnswer,
            incorrect_answers: formattedWrongAnswers
        }
    })

    //creates a question component
    const questions = formattedGameData.map( (question, index) => {
        return (
                <QuestionX 
                    key= {nanoid()}
                    question={question.question}
                    rightAnswer={question.correct_answer}
                    wrongAnswers={question.incorrect_answers}
                    setCorrectAnswers={setCorrectAnswers}
                />
        )
    })
    return (
        <div>
            <div className="game-container">
                {questions}
            </div>  
            <button>Check answers</button>
        </div>
    )
}