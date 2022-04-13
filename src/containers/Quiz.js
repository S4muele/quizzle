import React, { useState, useEffect, useRef, useMemo } from "react";
import { nanoid } from "nanoid";
import { useSoundsList, useEffects } from "../AudioContext";
import { BtnPrimary } from "../components/buttons/Buttons";
import { Container } from "../components/game/quiz/style"
import Stats from "../components/game/stats/Stats";
import Question from "../components/game/question/Question"
import Results from "../components/results/Results";

export default function QuizPage({apiData, setupData, getApiData, setApiData }) {

    const [quizData, setQuizData] = useState([])
    const [results, setResults] = useState(false)
    const [score, setScore] = useState("")
    const [allAnswersSelected, setAllAnswersSelected] = useState(false)
    const [selectedOptionsArr, setSelectedOptionsArr] = useState([])
    const [timer, setTimer] = useState("00:00")

    const effectsOn = useEffects()
    const sounds = useSoundsList()

    let mins = useRef(0)
    let secs = useRef(0)
    let timerId

    useEffect(() => {
        
        if (results) {
            clearInterval(timerId)
        } else {
            function incrementTimer() {
    
                let newTimer = ""
    
                secs.current++ 
        
                if (secs.current >= 60) {
                    mins.current++
                    secs.current = 0
                } 
        
                if (secs.current < 10 && mins.current < 10) {
    
                    newTimer = `0${mins.current}:0${secs.current}`
    
                } else if (secs.current >= 10 && mins.current < 10) {
    
                    newTimer = `0${mins.current}:${secs.current}`
    
                } else if (secs.current >= 10 && mins.current >= 10) {
    
                    newTimer = `${mins.current}:${secs.current}`
                }
    
                setTimer(newTimer)
            }

            timerId = setInterval(incrementTimer, 1000)
        }

        return () => clearInterval(timerId)
        
    }, [results])

    useEffect(()=>{

        const quizDataArr = apiData.map(question => {
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
        // setResults(false)
        setScore("") 

    },[apiData])

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

    const questions = useMemo(() => {

        return (
            quizData.map( (question, index) => {
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
        )

    }, [quizData]) 

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

    useEffect(() => {

        const selectedOptions = []
        quizData.forEach(question => {
            const selectedOption = question.possibleAnswers.filter(option => {
                return option.isSelected == true
            })
            if (selectedOption.length > 0) {
                selectedOptions.push(selectedOption)
            }
        })
        if (selectedOptions.length === quizData.length) {
            setAllAnswersSelected(true)
        } else setAllAnswersSelected(false)  

        setSelectedOptionsArr(selectedOptions)

    }, [quizData])

    function reset() {
        setSelectedOptionsArr([])
        secs.current = 0
        mins.current = 0
        setResults(false)
        // setQuizData([])s
    }

    return (
        <>
        {results ? 
            <Results 
                reset={reset}
                apiData={apiData}
                time={timer}
                score={score}
                setupData={setupData}
                getApiData={getApiData}
                setApiData={setApiData}
            />
        :
            <Stats>
                <Stats.Wrapper>
                    <Stats.ProgressWrapper>
                        <Stats.ProgressImgWrapper>
                            <Stats.ProgressImg src="images/progress.svg" alt="progress icon"/>
                        </Stats.ProgressImgWrapper>
                        <Stats.ProgressValue>
                            {selectedOptionsArr.length}/{quizData.length}
                        </Stats.ProgressValue>
                    </Stats.ProgressWrapper>
                    <Stats.TimerWrapper>
                        <Stats.TimerImgWrapper>
                            <Stats.TimerImg src="images/timer.svg" alt="timer icon"/>
                        </Stats.TimerImgWrapper>
                        <Stats.TimerValue>{timer}</Stats.TimerValue>
                    </Stats.TimerWrapper>
                </Stats.Wrapper>
            </Stats>
        }
        
        <Container>
            {questions}
            {allAnswersSelected ? 
                !results && 
                    <BtnPrimary 
                        form="setup"
                        onClick={() => {
                            checkResults()
                            return effectsOn ? sounds.playBtnClick() : ""
                        }}>DONE
                    </BtnPrimary>
                :
                <BtnPrimary disabled>DONE</BtnPrimary> 
            }   
        </Container>               
        </>
    )
}