import React, { useEffect, useState } from "react";
import { Container, Title, Tile, Name, Value } from "./style"
import { BtnPrimary, BtnSecondary } from "../buttons/Buttons";
import dateFormat from "dateformat";

export default function Results({apiData, setApiData, time, score, setupData, getApiData, reset}) {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    
    const userScore = `${score.length}/${apiData.length}`

    function playAgain(setupData, getApiData) {

        const {current} = setupData

        function getData({questionsNumber, category, difficulty, type}) {
            getApiData(questionsNumber, category, difficulty, type)
        }

        getData(current)
    }

    

    useEffect(() => { 
        window.scrollTo(0, 0)

        function getCategories() {
            const categoriesArr = apiData.map(question => {
                return question.category
            })
            const firstCategory = categoriesArr[0]
            
            if (categoriesArr.every(el => el === firstCategory )) {
                setCategory(firstCategory)
            } else {
                setCategory("All")
            }
        }

        function getDifficulty() {
            const difficultyArr = apiData.map(question => {
                return question.difficulty
            })
            const firstDifficulty = difficultyArr[0]
            
            if (difficultyArr.every(el => el === firstDifficulty )) {
                setDifficulty(firstDifficulty)
            } else {
                setDifficulty("All")
            }
        }

        getCategories()
        getDifficulty()
    })

    useEffect(() => {

        const now = new Date()
        const date = dateFormat(now, "d mmm yyyy - HH:MM")

        if (category) {
            let oldScoreArr = JSON.parse(localStorage.getItem("score")) || []

            const newScore = {
                date: date,
                category: category,
                time: time,
                score: userScore,
                difficulty: difficulty
            }

            oldScoreArr.push(newScore)

            localStorage.setItem("score", JSON.stringify(oldScoreArr))
        }
    }, [category])


    return (
        <Container id="results">
            <Title>RESULTS</Title>
            <Tile>
                <Name>Correct Answers:</Name>
                <Value>{userScore}</Value>
            </Tile>
            <Tile>
                <Name>Time:</Name>
                <Value>{time}</Value>
            </Tile>
            <Tile>
                <Name>Category:</Name>
                <Value>{category}</Value>
            </Tile>
            <Tile>
                <Name>Difficulty:</Name>
                <Value>{difficulty}</Value>
            </Tile>
            <BtnPrimary 
                onClick={() => {
                    reset()
                    playAgain(setupData, getApiData)
                }
                }>Play Again
            </BtnPrimary>
            <BtnSecondary
                onClick={() => setApiData("")}>
                New Game
            </BtnSecondary> 
        </Container>
    )
}