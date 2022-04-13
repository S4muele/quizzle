import React, { useState, useRef } from "react";
import Header from "../components/header/Header";
import QuizSetup from "../containers/QuizSetup";
import Quiz from "../containers/Quiz"

import { Link } from "react-router-dom";
import { home } from "../routes";
import { useEffects, useSoundsList } from "../AudioContext"

export default function GamePage() {

    const [apiData, setApiData] = useState("")
    let setupData = useRef({})

    const effectsOn = useEffects()
    const sounds = useSoundsList()

    function getApiData(questionsNumber, category, difficulty, type) {

        setupData.current = {
            questionsNumber: questionsNumber, 
            category: category, 
            difficulty: difficulty, 
            type: type
        }

        const questionsNumberUrl = questionsNumber ? `amount=${questionsNumber}` : ""
        const categoryUrl = category ? `&category=${category}` : ""
        const difficultyUrl = difficulty ? `&difficulty=${difficulty}` : ""
        const typeUrl = type ? `&type=${type}` : ""

        fetch(`https://opentdb.com/api.php?${questionsNumberUrl}${categoryUrl}${difficultyUrl}${typeUrl}&encode=url3986`)
            .then(res => res.json())
            .then(data => {

                const decodedGameData = data.results.map(dataEl => {
                    const decodedCategory = decodeURIComponent(dataEl.category)
                    const decodedQuestion = decodeURIComponent(dataEl.question)
                    const decodedRightAnswer = decodeURIComponent(dataEl.correct_answer)
                    const decodedWrongAnswers = dataEl.incorrect_answers.map(wrongAnswer => {
                        return decodeURIComponent(wrongAnswer)
                    })
                    return {
                        ...dataEl,
                        category: decodedCategory,
                        question: decodedQuestion,
                        correct_answer: decodedRightAnswer,
                        incorrect_answers: decodedWrongAnswers
                    }
                })
       
                setApiData(decodedGameData)
            })
    }

    return (
        <>
            <Header>
                <Header.LogoWrapper>
                    <Header.Logo src={`images/quizzle-logo.svg`}/>
                </Header.LogoWrapper>
                <Header.IconWrapper>
                    <Link 
                        onClick={() => effectsOn ? sounds.playReturnClick() : ""}
                        to={home}>
                        <Header.Icon src={`images/home.svg`}/>
                    </Link>
                </Header.IconWrapper>
            </Header>
            {apiData ?
                    <Quiz 
                        apiData={apiData}
                        setupData={setupData} 
                        getApiData={getApiData}
                        setApiData={setApiData}
                        /> 
                : 
                <QuizSetup getApiData={getApiData}/>
            }
        </>
    )  
}