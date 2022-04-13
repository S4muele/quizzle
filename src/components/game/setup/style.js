import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4.93rem;

    a {
        text-decoration: none;
    }
`
export const Title = styled.h2`
    font-size: 1.33rem;
    font-weight: 700;
    line-height: 1rem;
    text-align: center;
    margin: 2.33rem 0 4.4rem;
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 55ch;
`
export const Form = styled.form`
    width: 78.75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.33rem;
`
export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: .4rem;
`
export const Input = styled.input`
    width: 100%;
    height: 2.33rem;
    border: none;
    border-radius: .33rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-size: .86rem;
    padding-left: .73rem;
    margin-bottom: 2.33rem;
    color: rgba(51, 50, 70, 0.7);
`
export const Select = styled.select`
    width: 100%;
    height: 2.33rem;
    border: none;
    border-radius: .33rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-size: .86rem;
    padding-left: .73rem;
    margin-bottom: 2.33rem;
    color: rgba(51, 50, 70, 0.7);
`
export const Option = styled.option``
