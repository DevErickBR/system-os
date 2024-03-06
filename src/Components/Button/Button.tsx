import { Box } from "./stylesButton";

type Props = {
    title: string;
    IconButton?: any;
    action?: () => void;
}

export const Button = ({ title, IconButton, action }: Props) => {
    return (
        <Box onClick={action}><IconButton />{title}</Box>
    );
}

export default Button