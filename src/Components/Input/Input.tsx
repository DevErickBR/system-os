import { ChangeEvent } from "react";
import { InputBox } from "./styles";

type Props = {
    title: string;
    id: string;
    state: string;
    setState: (a: string) => void;
};

const InputForm = ({ title, id, state, setState }: Props) => {
    return (
        <InputBox
            placeholder={title}
            id={id}
            value={state}
            onChange={(e) => setState(e.target.value)}
        />
    );
};

export default InputForm;