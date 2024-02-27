import { ContainerInput } from "./styled"

type Props = {
    id: string;
    titleInput: string;
    nameInput: string;
    valueInput: string;
}

export const InputOrder = ({id,titleInput,nameInput,valueInput}:Props) => {


    return(
        <ContainerInput id={id}>
            <label htmlFor={nameInput}>{titleInput}</label>
            <div >
                <input name={nameInput} type="text" value={valueInput} autoFocus readOnly/>
            </div>
        </ContainerInput>

    )
}