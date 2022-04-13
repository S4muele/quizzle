import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4.93rem;
`

export const Title = styled.h2`
    font-size: 1.33rem;
    font-weight: 700;
    line-height: 1rem;
    text-align: center;
    margin: 2.33rem 0 4.4rem;
`
export const SettingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 55ch;
`
export const Setting = styled.div`
    width: 78.75%;
    height: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.33rem;
    padding: 0 1.33rem;
    border-radius: .33rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({theme}) => theme.black};
    background-color: ${({theme}) => theme.settingBg};
`
export const SettingTitle = styled.p`
    font-size: 1rem;
    font-weight: 700;
`
export const ThemeSlider = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 1.2rem;
    width: 2.46rem;
    border-radius: 0.84rem;
    background-color: ${({theme}) => theme.type === "light" ? theme.background : theme.pink};
`
export const ThemeSliderThumb = styled.div`
    width: 0.93rem;
    height: 0.93rem;
    margin: ${({theme}) => theme.type === "light" ? "0 auto 0 .13rem" : "0 .13rem 0 auto"};
    background-color: ${({theme}) => theme.sliderThumb};
    border-radius: 50%;
`
export const MusicSlider = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 1.2rem;
    width: 2.46rem;
    border-radius: 0.84rem;
    background-color: ${({theme, musicOn}) => musicOn ? theme.pink : theme.background};
`
export const MusicSliderThumb = styled.div`
    width: 0.93rem;
    height: 0.93rem;
    margin: ${({musicOn}) => musicOn ? "0 .13rem 0 auto" : "0 auto 0 .13rem"};
    background-color: ${({theme}) => theme.sliderThumb};
    border-radius: 50%;
    `

export const AudioSlider = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 1.2rem;
    width: 2.46rem;
    border-radius: 0.84rem;
    background-color: ${({theme, effectsOn}) => effectsOn ? theme.pink : theme.background};
    `

export const AudioSliderThumb = styled.div`
    width: 0.93rem;
    height: 0.93rem;
    margin: ${({effectsOn}) => effectsOn ? "0 .13rem 0 auto" : "0 auto 0 .13rem"};
    border-radius: 50%;
    background-color: ${({theme}) => theme.sliderThumb};
`