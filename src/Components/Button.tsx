type Props = {
    title: string;
    color?: string;
}

export const Button = ({ title }: Props) => {
    return (
        <button >{title}</button>
    );
}

