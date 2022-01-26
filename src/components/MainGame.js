import React from "react"
import { nanoid } from "nanoid"
import Question from "./Question"

export default function MainGame({gameData, startGame}) {

    const [quizData, setQuizData] = React.useState([])
    const [results, setResults] = React.useState(false)
    const [score, setScore] = React.useState("")
    const [allAnswersSelected, setAllAnswersSelected] = React.useState(false)
    
    React.useEffect(()=>{

        const quizDataArr = gameData.map(question => {
            const id = nanoid()
            const allAnswers = question.incorrect_answers.concat(question.correct_answer)
            const allShuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random())
            const allAnswersArr = allShuffledAnswers.map(answer => {
                return {
                    id: id,
                    answer: answer,
                    isSelected: false,
                    isCorrect: false,
                    isIncorrect: false
                }
            })
            return {
                id: id,
                question: question.question,
                possibleAnswers: allAnswersArr,
                correctAnswer: question.correct_answer
            }
        })
        setQuizData(quizDataArr)
        setResults(false)
        setScore("") 

    },[gameData])

    function selectAnswer(option, id) {

        const newQuizData = quizData.map(question => {
            if(question.id === id ) { 
                const newPossibleAnswers = question.possibleAnswers.map(answer => {
                    answer.isSelected = false
                    if (answer.answer == option) {
                        return {
                            ...answer,
                            isSelected: !answer.isSelected
                        }
                    } else return answer
                })
                return {
                    ...question,
                    possibleAnswers: newPossibleAnswers
                }
            } else {
                return question
            }
        })
        setQuizData(newQuizData)
    }

    const questions = quizData.map( (question, index) => {

        return (
                <Question 
                    key={nanoid()}
                    id={index}
                    question={question.question}
                    possibleAnswers={question.possibleAnswers}
                    selectAnswer={selectAnswer}
                    results={results}
                />
        )
    })

    function checkResults() {

        let scoreArr = []
        quizData.forEach(question => {
            const selectedOptionArr = question.possibleAnswers.filter(option => {
                return option.isSelected == true
            })
            if (selectedOptionArr[0].answer == question.correctAnswer) {
                scoreArr.push(selectedOptionArr[0].answer)
            }
        })
        setScore(scoreArr)
        setResults(prevState => !prevState)
        const resultData = quizData.map(question => {
            const newPossibleAnswers = question.possibleAnswers.map(answer => {
                if (answer.answer === question.correctAnswer) {
                    return {
                        ...answer,
                        isCorrect: true
                    }
                } else {
                    if (answer.isSelected == true) {
                        return {
                            ...answer,
                            isIncorrect: true
                        }
                    } else return answer
                }
            })
            return {
                ...question,
                possibleAnswers: newPossibleAnswers
            }
        })
        setQuizData(resultData)
    }
    
    React.useEffect(() => {

        const selectedOptionsArr = []
        quizData.forEach(question => {
            const selectedOption = question.possibleAnswers.filter(option => {
                return option.isSelected == true
            })
            if (selectedOption.length > 0) {
                selectedOptionsArr.push(selectedOption)
            }
        })
        if (selectedOptionsArr.length === quizData.length) {
            setAllAnswersSelected(true)
        } else setAllAnswersSelected(false)     
    }, [quizData])

    function restartGame() {
        startGame()
    }

    return (

        <div className="game-container">
            <h2 className="game-header">Quizzle!</h2>
            {questions}
            {allAnswersSelected ? 

                !score && <button className="check-results-btn enabled" onClick={checkResults}>
                Check answers
                </button>
            :
                <button className="check-results-btn disabled">Check answers</button>
            }
            
            {score ? 
                <div className="score-container">
                    <p className="user-score">You scored {score.length}/5 correct answers</p>
                    <button className="play-again-btn" onClick={restartGame}>Play again</button> 
                </div> : ""
            }

        </div>
    )
}