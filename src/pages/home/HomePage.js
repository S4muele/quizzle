import React from "react";
import { Link } from "react-router-dom";

import { useSoundsList, useEffects } from "../../AudioContext"
import { Container, LogoWrapper, Logo, ButtonsWrapper } from "./style"
import { settings, main, about, score } from "../../routes";

import Header from "../../components/header/Header";
import  {BtnPrimary, BtnSecondary, BtnTertiary } from "../../components/buttons/Buttons"

export default function HomePage() {

    const effectsOn = useEffects()
    const sounds = useSoundsList()

    return (
        <>
            <Header>
                <Header.IconWrapper>
                    <Link 
                        onClick={() => effectsOn ? sounds.playActionClick() : ""}
                        to={settings}>
                        <Header.Icon src={`images/settings.svg`}/>
                    </Link>
                </Header.IconWrapper>
                
            </Header>
            
            <Container>
                <LogoWrapper>
                    <Logo src={`images/quizzle-logo.svg`}/>
                </LogoWrapper>
                <ButtonsWrapper>
                    <Link to={main}>
                        <BtnPrimary 
                            onClick={() => effectsOn ? 
                                sounds.playBtnClick() : ""}>
                                Play
                        </BtnPrimary>
                    </Link>
                    <Link to={about}>
                        <BtnSecondary 
                            onClick={() => effectsOn ? 
                                sounds.playBtnClick() : ""}>
                                About
                        </BtnSecondary>
                    </Link>
                    <Link to={score}>
                        <BtnTertiary 
                            onClick={() => effectsOn ? 
                                sounds.playBtnClick() : ""}>
                                Score
                        </BtnTertiary>
                    </Link>
                </ButtonsWrapper>
            </Container>
        </>
    ) 
}