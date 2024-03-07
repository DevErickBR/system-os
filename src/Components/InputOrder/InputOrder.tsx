import React, { useState } from "react";
import { ContainerInput } from "./styled"

type Props = {
    id: string;
    titleInput: string;
    nameInput: string;
    valueInput: string;
}

export const InputOrder = ({id,titleInput,nameInput,valueInput}:Props) => {

    const [value, setValue] = useState<string>(valueInput)

    const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return(
        <ContainerInput id={id}>
            <div>
                <label htmlFor={nameInput}>{titleInput}</label>
                <div className="inputDiv">
                    <input id={nameInput} name={nameInput} type="text" value={value} onChange={handleChangeValue} readOnly/>
                </div>
            </div>
        </ContainerInput>

    )
}