import React from "react";
import {Container, LogoWrapper, Logo, IconWrapper, Icon} from "./style"

export default function Header({children, ...restProps}) {

    return <Container {...restProps}>{children}</Container>
}

Header.LogoWrapper = ({children}) => <LogoWrapper>{children}</LogoWrapper>
Header.Logo = ({...restProps}) => <Logo{...restProps}/>
Header.IconWrapper = ({children}) => <IconWrapper>{children}</IconWrapper>
Header.Icon = ({...restProps}) => <Icon {...restProps}/>