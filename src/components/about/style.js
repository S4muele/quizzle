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
export const InnerWrapper = styled.div`
    width: 78.65%;
    max-width: 55ch;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const QuestionWrapper = styled.div`
    margin-bottom: 2.33rem;
`

export const Question = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.33rem;
    margin-bottom: .26rem;
`
export const Answer = styled.p`
    font-weight: 400;
    line-height: 1.22rem;

    a {
        color: ${({theme}) => theme.yellow}
    }
`
export const TextLink = styled.a`
    
`
