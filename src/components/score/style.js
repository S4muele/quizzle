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
    max-width: 35ch;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Tile = styled.div`
    width: 100%;
    margin-bottom: 1.33rem;
`

export const Date = styled.h3`
    text-decoration: underline;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: .8rem;
`
export const EntriesWrapper = styled.div``

export const Entry = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: .66rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.2rem;
`
export const EntryName = styled.p``
export const EntryValue = styled.p`
    text-transform: capitalize;
`
