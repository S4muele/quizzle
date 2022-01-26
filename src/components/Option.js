import React from "react";

export default function Option({option, isSelected, isCorrect, isIncorrect, selectAnswer, id, results}) {

    let toRender = ""

    if (isCorrect) {
        toRender = <p className="option correct-option">{option}</p>
    } else if (isIncorrect) {
        toRender = <p className="option incorrect-option">{option}</p>
    } else if (isCorrect === isIncorrect) {
        toRender = <p className="option dimmed-option">{option}</p>
    }

    return (
        <div className="option-container">
            {results ? toRender :
                <p 
                    className={isSelected ? "option-selected option" : "option"} 
                    onClick={() => selectAnswer(option, id)}>{option}</p>
            }
        </div>
    )
}