import React from "react";
import { nanoid } from "nanoid"
import Option from "./Option";

export default function Question({question, possibleAnswers, selectAnswer, results, id}) {

    const options = possibleAnswers.map((option, index) => {
        return (
            <Option
                key={index}
                id={option.id}
                option={option.answer}
                isSelected={option.isSelected}
                isCorrect={option.isCorrect}
                isIncorrect={option.isIncorrect}
                selectAnswer={selectAnswer}
                results={results}
            />
        )
    })

    return (
        <div className="question-container">
            <h2>{id + 1}) {question}</h2>
            <div className="options-container">
                {options}
            </div>
        </div>
    )
}