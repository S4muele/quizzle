import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    margin: 2.33rem 0;
    background-color: ${({theme}) => theme.type === "light" ? "#7C83ED" : "#252525"};

    button {
        margin-bottom: 1.4rem;

        &:first-of-type {
            margin-top: 1.4rem;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`
export const Title = styled.h2`
    font-size: 1.33rem;
    font-weight: 700;
    line-height: 1rem;
    text-align: center;
    margin-bottom: 1.6rem;
`
export const Tile = styled.div`
    width: 16.73rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    line-height: 1.2rem;
    margin-bottom: 1rem;

`

export const Name = styled.p``
export const Value = styled.p`
    text-transform: capitalize;
`