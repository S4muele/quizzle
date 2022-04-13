import React from "react";
import { Link } from "react-router-dom";

import { useEffects, useSoundsList } from ".././AudioContext"

import Header from "../components/header/Header";
import About from "../components/about/About";

import { home } from "../routes";
import { aboutData } from "../components/about/aboutData";
import { nanoid } from "nanoid";

export default function AboutPage() {

    const effectsOn = useEffects()
    const sounds = useSoundsList()

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

            <About>
                <About.Title>ABOUT</About.Title>
                <About.InnerWrapper>
                    {aboutData.map(el => {
                        return (
                            <About.QuestionWrapper key={nanoid()}>
                                <About.Question>
                                    {el.question}
                                </About.Question>
                                <About.Answer>
                                    <span dangerouslySetInnerHTML={{__html: el.answer}} />
                                </About.Answer>
                            </About.QuestionWrapper>  
                        )
                    })}  
                </About.InnerWrapper>
            </About>           
        </>
    )
}