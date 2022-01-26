import React from "react"

export default function OptionX({value, isSelected, selectOption}) {

    return (
        <p 
            className={isSelected ? "option option-selected" : "option"}
            onClick={selectOption}
        >{value}</p>
    )
}