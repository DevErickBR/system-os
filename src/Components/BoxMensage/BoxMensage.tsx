import { ContainerMensage } from "./styled";

type Props = {
    description: string;
}

export const BoxMensage = ( {description}:Props ) => {
    return (
        <ContainerMensage>
            {description.toUpperCase()}
        </ContainerMensage>
    );
};