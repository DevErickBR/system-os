import { InputBox } from "./styles";

type Props = {
    title: string;
    id: string;
};

const InputForm = ({ title, id }: Props) => {
    return (
        <InputBox placeholder={title} id={id} />
    );
};

export default InputForm;