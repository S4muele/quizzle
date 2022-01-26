import { selectOptions } from "@testing-library/user-event/dist/select-options";
import React from "react";
import { nanoid } from "nanoid"
import OptionX from "./OptionX"

export default function QuestionX({question, rightAnswer, wrongAnswers}) {

    const [possibleAnswers, setPossibleAnswers] = React.useState([])

    React.useEffect(() => {
        const allAnswers = wrongAnswers.concat(rightAnswer)
        const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random())
        setPossibleAnswers(shuffledAnswers.map((answer, index) => {
            return (
                {
                    key: nanoid(),
                    value: answer,
                    isSelected: false
                }
            )
        }))
    }, [])

    function selectOption(value) {
        setPossibleAnswers(prevAnswers => prevAnswers.map(answer => {
            answer.isSelected = false
            return answer.value === value ?
                    {...answer,
                    isSelected: !answer.isSelected} 
                    : answer
            }
        ))  
    }

    const options = possibleAnswers.map((option, index) => {
        return (
            <OptionX 
                key={index}
                value={option.value}
                isSelected={option.isSelected}
                selectOption={() => selectOption(option.value)}
            />
        )
    })

    return (
            <div className="question-container">
                <div className="question">
                    <h2>{question}</h2>
                </div>
                <div className="answers">
                    {options}
                </div>
            </div>
    )
}