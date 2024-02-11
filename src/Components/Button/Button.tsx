import { Box } from "./stylesButton";

type Props = {
    title: string;
    IconButton?: any;
}

export const Button = ({ title, IconButton }: Props) => {
    return (
        <Box><IconButton />{title}</Box>
    );
}

export default Button