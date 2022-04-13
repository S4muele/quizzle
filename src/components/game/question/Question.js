import React from "react";
import Option from "../option/Option";
import { QuestionWrapper, QuestionTitle, OptionsWrapper } from "./style"

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
        <QuestionWrapper>
            <QuestionTitle>{question}</QuestionTitle>
            <OptionsWrapper>
                {options}
            </OptionsWrapper>
        </QuestionWrapper>
    )
}