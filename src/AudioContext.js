import React, {useState, useRef, useEffect, createContext, useContext} from "react";

export const EffectsContext = createContext()
export const HandleEffectsContext = createContext()
export const SoundsListContext = createContext()
export const MusicContext = createContext()
export const HandleMusicContext = createContext()

export function useEffects() {
    return useContext(EffectsContext)
}
export function useEffectsToggle() {
    return useContext(HandleEffectsContext)
}
export function useSoundsList() {
    return useContext(SoundsListContext)
}
export function useMusic() {
    return useContext(MusicContext)
}
export function useMusicToggle() {
    return useContext(HandleMusicContext)
}

export function AudioProvider({children}) {

    const btnClick = useRef(new Audio("audio/btn-click.mp3"))
    const returnClick = useRef(new Audio("audio/return-click.mp3"))
    const actionClick = useRef(new Audio("audio/action-click.mp3"))
    const backgroundMusic = useRef(new Audio("audio/music.mp3"))

    
    const [effectsOn, setEffectsOn] = useState(false)
    const [musicOn, setMusicOn] = useState(false)
    
    function toggleEffects() {
        if (effectsOn) {
            setEffectsOn(false)
        } else {
            setEffectsOn(true)
        }
    }
    function toggleMusic() {
        //make sure the music loops when finished
        if (musicOn) {
            setMusicOn(false)
            backgroundMusic.current.pause()
        } else {
            setMusicOn(true)
            backgroundMusic.current.play()
        }
    }
    
    const clickSoundsList = {
        playBtnClick() {
            btnClick.current.play() 
        },
        playReturnClick() {
            returnClick.current.play() 
        },
        playActionClick() {
            actionClick.current.play() 
        }
    }

    useEffect(()=> {
        backgroundMusic.current.addEventListener("ended", () => toggleMusic())
        // return () => backgroundMusic.current.removeEventListener("ended", () => toggleMusic())
    },[])

    return (
        <EffectsContext.Provider value={effectsOn}>
            <HandleEffectsContext.Provider value={toggleEffects}>
                <SoundsListContext.Provider value={clickSoundsList}>
                    <MusicContext.Provider value={musicOn}>
                        <HandleMusicContext.Provider value={toggleMusic}>
                            {children}
                        </HandleMusicContext.Provider>
                    </MusicContext.Provider>
                </SoundsListContext.Provider>
            </HandleEffectsContext.Provider>
        </EffectsContext.Provider>
    )
}