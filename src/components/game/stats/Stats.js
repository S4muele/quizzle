import React from "react"
import { 
    Container, Wrapper, TimerWrapper, TimerValue, 
    TimerImgWrapper, TimerImg, ProgressWrapper, 
    ProgressValue, ProgressImgWrapper, ProgressImg 
} from "./styles"

export default function Stats({children}) {
    return <Container>{children}</Container>
}

Stats.Wrapper = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>
Stats.TimerWrapper = ({children, ...restProps}) => <TimerWrapper {...restProps}>{children}</TimerWrapper>
Stats.TimerValue = ({children, ...restProps}) => <TimerValue {...restProps}>{children}</TimerValue>
Stats.TimerImgWrapper = ({children, ...restProps}) => <TimerImgWrapper {...restProps}>{children}</TimerImgWrapper>
Stats.TimerImg = ({...restProps}) => <TimerImg {...restProps}/>
Stats.ProgressWrapper = ({children, ...restProps}) => <ProgressWrapper {...restProps}>{children}</ProgressWrapper>
Stats.ProgressValue = ({children, ...restProps}) => <ProgressValue {...restProps}>{children}</ProgressValue>
Stats.ProgressImgWrapper = ({children, ...restProps}) => <ProgressImgWrapper {...restProps}>{children}</ProgressImgWrapper>
Stats.ProgressImg = ({...restProps}) => <ProgressImg {...restProps}/>