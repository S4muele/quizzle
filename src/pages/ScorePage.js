import React, { useState } from "react";
import Header from "../components/header/Header";
import Score from "../components/score/Score"

import { home } from "../routes";
import { Link } from "react-router-dom";
import { useEffects, useSoundsList } from ".././AudioContext"
import { nanoid } from "nanoid";
import { BtnTertiary } from "../components/buttons/Buttons";

export default function ScorePage() {

    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("score")) || ""
    )
    
    const effectsOn = useEffects()
    const sounds = useSoundsList()

    const scoreBoard = userData && userData.map(el => {
        return (
            <Score.Tile key={nanoid()}>
                    <Score.Date>{el.date}</Score.Date>
                    <Score.EntriesWrapper>
                        <Score.Entry>
                            <Score.EntryName>Correct answers:</Score.EntryName>
                            <Score.EntryValue>{el.score}</Score.EntryValue>
                        </Score.Entry>
                        <Score.Entry>
                            <Score.EntryName>Time:</Score.EntryName>
                            <Score.EntryValue>{el.time}</Score.EntryValue>
                        </Score.Entry>
                        <Score.Entry>
                            <Score.EntryName>Category:</Score.EntryName>
                            <Score.EntryValue>{el.category}</Score.EntryValue>
                        </Score.Entry>
                        <Score.Entry>
                            <Score.EntryName>Difficulty:</Score.EntryName>
                            <Score.EntryValue>{el.difficulty}</Score.EntryValue>
                        </Score.Entry>
                    </Score.EntriesWrapper>
                </Score.Tile>
        )
    })

    function deleteData() {
        localStorage.removeItem("score")
        setUserData("")
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
                        <Header.Icon src={`images/back-arrow.svg`}/>
                    </Link>
                </Header.IconWrapper>
            </Header>
            {userData ? 
                <Score>
                    <Score.Title>SCOREBOARD</Score.Title>
                    {scoreBoard}
                    <BtnTertiary onClick={deleteData}>Delete Data</BtnTertiary>
                </Score>
                :
                <Score>
                    <Score.Title>SCOREBOARD</Score.Title>
                    <Score.EntryName>You don’t have any previous games</Score.EntryName>
                </Score>
            }
        </>
    )
}