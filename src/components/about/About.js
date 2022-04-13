import React from "react";
import {Container, Title, InnerWrapper, QuestionWrapper, Question, Answer, TextLink} from "./style"

export default function About({children}) {
    return <Container>{children}</Container>
}

About.Title = ({children}) => <Title>{children}</Title>
About.InnerWrapper = ({children}) => <InnerWrapper>{children}</InnerWrapper>
About.QuestionWrapper = ({children}) => <QuestionWrapper>{children}</QuestionWrapper>
About.Question = ({children}) => <Question>{children}</Question>
About.Answer = ({children}) => <Answer>{children}</Answer>
About.TextLink = ({children, ...restProps}) => <TextLink {...restProps}>{children}</TextLink>