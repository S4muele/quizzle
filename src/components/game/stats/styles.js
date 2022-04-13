import styled from "styled-components"

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.type === "light" ? "#7C83ED" : "#252525"};
    margin: 0 auto;
    `

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 78.75%;
    height: 3.33rem;
    margin: 0 auto 2.33rem;
    padding: 0 2.26rem;
`
export const ProgressWrapper = styled.div`
    display: flex;
`
export const ProgressValue = styled.div`
    font-weight: 400;
    letter-spacing: .05rem;


`
export const ProgressImgWrapper = styled.div`
    margin-right: .6rem;
`
export const ProgressImg = styled.img``

export const TimerWrapper = styled.div`
    display: flex;
    width: 4.26rem;
`
export const TimerValue = styled.div`
    font-weight: 400;
    letter-spacing: .05rem;
`
export const TimerImgWrapper = styled.div`
    margin-right: .6rem;
`
export const TimerImg = styled.img``
