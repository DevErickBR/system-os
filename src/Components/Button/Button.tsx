import styles from "./Button.module.css"

type Props = {
    title: string;
}

export const Button = ({ title }: Props) => {
    return (
        <button className={styles.button}>{title}</button>
    );
}

