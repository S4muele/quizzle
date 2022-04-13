import React from "react";
import { Link } from "react-router-dom";

import { home } from "../routes";

import { useMusic, useMusicToggle, useEffects, useEffectsToggle, useSoundsList } from "../AudioContext"

import Header from "../components/header/Header"
import Settings from "../components/settings/Settings";

export default function SettingsPage({toggleTheme}) {

    const effectsOn = useEffects()
    const toggleEffects = useEffectsToggle()
    const sounds = useSoundsList()
    const musicOn = useMusic()
    const toggleMusic = useMusicToggle()

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
            
            <Settings>

                <Settings.Title>SETTINGS</Settings.Title>

                <Settings.SettingsWrapper>
                    <Settings.Setting>
                        <Settings.SettingTitle>
                            Sound effects
                        </Settings.SettingTitle>
                        <Settings.AudioSlider
                            onClick={() => {
                                toggleEffects()
                                return effectsOn ? "" : sounds.playActionClick()
                            }}
                            effectsOn={effectsOn}>
                        </Settings.AudioSlider>
                    </Settings.Setting>

                    <Settings.Setting>
                        <Settings.SettingTitle>
                            Music
                        </Settings.SettingTitle>
                        <Settings.MusicSlider 
                            onClick={() => {
                                toggleMusic()
                                effectsOn && sounds.playActionClick() 
                            }}
                            musicOn={musicOn}>
                        </Settings.MusicSlider>
                    </Settings.Setting>

                    <Settings.Setting>
                        <Settings.SettingTitle>
                            Dark mode
                        </Settings.SettingTitle>
                        <Settings.ThemeSlider 
                            onClick={() => {
                                toggleTheme()
                                effectsOn && sounds.playActionClick() 
                            }}>
                        </Settings.ThemeSlider>
                    </Settings.Setting>
                </Settings.SettingsWrapper>
            </Settings>
        </>
    )
}