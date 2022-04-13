import React from "react"

import {
    Container, Title, SettingsWrapper, Setting, SettingTitle, 
    ThemeSlider, ThemeSliderThumb, MusicSlider, 
    MusicSliderThumb, AudioSlider, AudioSliderThumb 
} from "./style"

export default function Settings({children}) {
    return <Container>{children}</Container>
}

Settings.Title = ({children}) => <Title>{children}</Title>
Settings.SettingsWrapper = ({children}) => <SettingsWrapper>{children}</SettingsWrapper>
Settings.Setting = ({children}) => <Setting>{children}</Setting>
Settings.SettingTitle = ({children}) => <SettingTitle>{children}</SettingTitle>

Settings.AudioSlider = ({...restprops}) => (
    <AudioSlider {...restprops}>
        <AudioSliderThumb {...restprops}></AudioSliderThumb>
    </AudioSlider>
)

Settings.MusicSlider = ({toggleMusic, ...restProps}) => (
    <MusicSlider {...restProps}>
        <MusicSliderThumb {...restProps}></MusicSliderThumb>
    </MusicSlider>
)

Settings.ThemeSlider = ({...restprops}) => {
   return (
    <ThemeSlider {...restprops}><ThemeSliderThumb></ThemeSliderThumb></ThemeSlider>
   )
}