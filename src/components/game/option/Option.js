import React from "react";
import { OptionContainer, OptionTitle } from "./style"

export default function Option({option, selectAnswer, id, results, ...restProps}) {

    return (
        <>
            {results ?  
                <OptionContainer {...restProps} results={results.toString()}>
                    <OptionTitle {...restProps} results={results.toString()}>
                        {option}
                    </OptionTitle>
                </OptionContainer> 
                :
                <OptionContainer 
                    onClick={() => selectAnswer(option, id)}
                    {...restProps}>
                    <OptionTitle
                        {...restProps} 
                    >{option}
                    </OptionTitle>
                </OptionContainer>
            }
        </>
    )
}

                