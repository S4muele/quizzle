import styled from "styled-components"

export const QuestionWrapper = styled.div`
    width: 78.75%;
    max-width: 55ch;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.33rem;
`

export const QuestionTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.33rem;
    margin-bottom: .8rem;
`

export const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
`