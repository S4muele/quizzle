import React, { useState, createContext, useContext } from "react";

export const ApiDataContext = createContext()
export const GetApiDataContext = createContext()

export function useApiData() {
    return useContext(ApiDataContext)
}
export function useGetApiData() {
    return useContext(GetApiDataContext)
}

export function ApiDataProvider({children}) {

    const [apiData, setApiData] = useState("")

    function getApiData(questionsNumber, category, difficulty, type) {

        const questionsNumberUrl = questionsNumber ? `amount=${questionsNumber}` : ""
        const categoryUrl = category ? `&category=${category}` : ""
        const difficultyUrl = difficulty ? `&difficulty=${difficulty}` : ""
        const typeUrl = type ? `&type=${type}` : ""

        fetch(`https://opentdb.com/api.php?${questionsNumberUrl}${categoryUrl}${difficultyUrl}${typeUrl}&encode=url3986`)
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
       
                setApiData(decodedGameData)
            })
    }

    return (
        <GetApiDataContext.Provider value={getApiData}>
            <ApiDataContext.Provider value={apiData}>
                {children}
            </ApiDataContext.Provider>
        </GetApiDataContext.Provider>
    )
}
// https://opentdb.com/api.php?${questionsNumberUrl}${categoryUrl}${difficultyUrl}${typeUrl}