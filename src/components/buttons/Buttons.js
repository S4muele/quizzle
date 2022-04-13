import styled from "styled-components";

export const BtnPrimary = styled.button`
    cursor: ${({disabled}) => disabled ? "auto" : "pointer"};
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1rem;
    letter-spacing: 0.07em;
    border-radius: 0.96rem;
    width: 10rem;
    height: 2.46rem;
    display: grid;
    place-content: center;
    color: #FFFFFF;
    opacity: ${({disabled}) => disabled ? .6 : 1};
    background-color: ${({theme}) => theme.pink};
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover,
    &:active,
    &:focus {
        background-color: ${({theme, disabled}) => disabled ? theme.pink : theme.pinkHover};
    }
`
export const BtnSecondary = styled.button`
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1rem;
    letter-spacing: 0.07em;
    border-radius: 0.96rem;
    width: 10rem;
    height: 2.46rem;
    display: grid;
    place-content: center;
    color: #FFFFFF;
    background-color: ${({theme}) => theme.yellow};
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover,
    &:active,
    &:focus {
        background-color: ${({theme}) => theme.yellowHover};
    }
`
export const BtnTertiary = styled.button`
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1rem;
    letter-spacing: 0.07em;
    border-radius: 0.96rem;
    width: 10rem;
    height: 2.46rem;
    display: grid;
    place-content: center;
    color: #FFFFFF;
    background-color: ${({theme}) => theme.blue};
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    &:hover,
    &:active,
    &:focus {
        background-color: ${({theme}) => theme.blueHover};
        
    }
`