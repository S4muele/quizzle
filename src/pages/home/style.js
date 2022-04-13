import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
    max-width: 1000px;
    margin: 0 auto;
`

export const LogoWrapper = styled.div`
    width: 16.8rem;
    margin: 4rem auto 1.86rem;

    @media(min-width: 480px) {
        width: 22rem;
    }

    @media(min-width: 720px) {
        width: 25rem;
    }
`

export const Logo = styled.img`
    width: 100%;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    Button {
        margin-bottom: 1.66rem;
    }

    a {
        text-decoration: none;
    }
`