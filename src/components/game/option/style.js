import styled from "styled-components"

export const OptionContainer = styled.div`
cursor: ${({results}) => results ? "auto" : "pointer"};
width: 100%;
max-width: 320px;
display: grid;
place-content: center;
margin: 0 auto .73rem;
border-radius: .33rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background-color: ${({theme, isSelected, results, isCorrect, isIncorrect}) => {
    
    if (results) {
        if (isCorrect) {
            return theme.correctOption
        } else if (isIncorrect) {
            return theme.incorrectOption
        } else {
            return theme.dimmedOption
        }
    } else if (isSelected) {
        return theme.selectedOptionBg
    } else if (!isSelected) {
        return theme.optionBg
    }  
}};

`
export const OptionTitle = styled.p`
    font-weight: ${({isSelected, isCorrect, isIncorrect}) => {

        if (isSelected === true ||
            isCorrect === true ||
            isIncorrect === true) {
                return 700
            } else {
                return 400
            }
    }};

    text-align: center;
    padding: .73em 1.06em;
`