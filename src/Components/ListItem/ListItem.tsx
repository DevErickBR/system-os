import { ListContainer } from "./styled"

type Props = {
    id: number
    client: string;
    dataStart: string;
    dataEnd: string;
    status: string;
    actionState: (a: boolean) => void;
    state: boolean;
}

export const ListItem = ({ id, client, dataStart, dataEnd, status, actionState, state }: Props) => {

    const eventClickOrder = (e: React.MouseEvent) => {
        console.log(e.currentTarget.id)
    }

    return (
        <ListContainer id={id.toString()} onClick={(e) => eventClickOrder(e)}>
            <tr>{id}</tr>
            <tr>{client}</tr>
            <tr>{dataStart}</tr>
            <tr>{dataEnd}</tr>
            <tr>{status}</tr>
        </ListContainer>
    )
}