import React, { useState } from "react";
import { useEffects, useSoundsList } from "../AudioContext"
import { BtnPrimary } from "../components/buttons/Buttons"
import Setup from "../components/game/setup/Setup";

export default function SetupPage({getApiData}) {

    const [questionsNumber, setQuestionsNumber] = useState(5)
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [type, setType] = useState("")

    const effectsOn = useEffects()
    const sounds = useSoundsList()

    return (
        <Setup>
                    <Setup.Title>NEW GAME</Setup.Title>
                    <Setup.FormWrapper>
                        <Setup.Form id="setup">
                            <Setup.Label for="num-of-questions">
                                Number of Questions:
                            </Setup.Label>
                            <Setup.Input 
                                type="number" 
                                min="3"
                                max="50"
                                value={questionsNumber}
                                onChange={(e) => setQuestionsNumber(e.target.value)}
                                id="num-of-questions" 
                                name="num-of-questions"
                            />

                            <Setup.Label for="category">
                                Category:
                            </Setup.Label>
                            <Setup.Select
                                value={category.value}
                                onChange={(e) => setCategory(e.target.value)}
                                id="category"
                                name="category">
                                <Setup.Option value="">Any</Setup.Option>
                                <Setup.Option value="9">General Knowledge</Setup.Option>
                                <Setup.Option value="21">Sports</Setup.Option>
                                <Setup.Option value="22">Geography</Setup.Option>
                                <Setup.Option value="23">History</Setup.Option>
                                <Setup.Option value="18">Computers</Setup.Option>
                                <Setup.Option value="25">Art</Setup.Option>
                            </Setup.Select>

                            <Setup.Label for="difficulty">
                                Difficulty:
                            </Setup.Label>
                            <Setup.Select
                                value={difficulty.value}
                                onChange={(e) => setDifficulty(e.target.value)}
                                id="difficulty"
                                name="difficulty">
                                <Setup.Option value="">Any</Setup.Option>
                                <Setup.Option value="easy">Easy</Setup.Option>
                                <Setup.Option value="medium">Medium</Setup.Option>
                                <Setup.Option value="hard">Hard</Setup.Option>
                            </Setup.Select>

                            <Setup.Label for="type">
                                Type:
                            </Setup.Label>
                            <Setup.Select
                                value={type.value}
                                onChange={(e) => setType(e.target.value)}
                                id="type"
                                name="type">
                                <Setup.Option value="">Any</Setup.Option>
                                <Setup.Option value="multiple">Multiple choise</Setup.Option>
                                <Setup.Option value="boolean">True / False</Setup.Option>
                            </Setup.Select>

                        </Setup.Form>

                        {questionsNumber < 3 || questionsNumber > 50 ? 
                        <BtnPrimary disabled>START</BtnPrimary> 
                        : 
                        <BtnPrimary 
                            form="setup"
                            onClick={() => {
                                getApiData(questionsNumber, category, difficulty, type)
                                return effectsOn ? sounds.playBtnClick() : ""
                            }}>START
                        </BtnPrimary>}
                        
                    </Setup.FormWrapper>
                </Setup>
    )
}