import React from "react";
import {Container, Title, FormWrapper, Form, Input, Label, Select, Option} from "./style"

export default function Setup({children}) {
    return <Container>{children}</Container>
}

Setup.Container = ({children}) => <Container>{children}</Container>
Setup.Title = ({children}) => <Title>{children}</Title>
Setup.FormWrapper = ({children}) => <FormWrapper>{children}</FormWrapper>
Setup.Form = ({children}) => <Form>{children}</Form>
Setup.Input = ({...restProps}) => <Input {...restProps}/>
Setup.Label = ({children}) => <Label>{children}</Label>
Setup.Select = ({children, ...restProps}) => <Select {...restProps}>{children}</Select>
Setup.Option = ({children, ...restProps}) => <Option {...restProps}>{children}</Option>