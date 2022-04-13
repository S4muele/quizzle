import React from "react";
import { 
    Container, Title, InnerWrapper, 
    Tile, Date, EntriesWrapper, Entry, 
    EntryName, EntryValue } 
from "./style"

export default function Score({children, ...restprops}) {
    return (
        <Container {...restprops}>
            <InnerWrapper {...restprops}>
                {children}
            </InnerWrapper>
        </Container>
    )
}

Score.Title = ({children}) => <Title>{children}</Title>
Score.Tile = ({children, ...restProps}) => <Tile {...restProps}>{children}</Tile>
Score.Date = ({children, ...restProps}) => <Date {...restProps}>{children}</Date>
Score.EntriesWrapper = ({children, ...restProps}) => <EntriesWrapper {...restProps}>{children}</EntriesWrapper>
Score.Entry = ({children, ...restProps}) => <Entry {...restProps}>{children}</Entry>
Score.EntryName = ({children, ...restProps}) => <EntryName {...restProps}>{children}</EntryName>
Score.EntryValue = ({children, ...restProps}) => <EntryValue {...restProps}>{children}</EntryValue>