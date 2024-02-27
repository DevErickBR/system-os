import { ListContainer } from "./styled"

type Props = {
    id: number
    client: string;
    dataStart: string;
    dataEnd: string;
    status: string;
    actionState: (a: boolean) => void;
    state: boolean;
    setTargetId: (a: number) => void;
}

export const ListItem = ({ id, client, dataStart, dataEnd, status, actionState, state, setTargetId }: Props) => {

    const eventClickOrder = (e: React.MouseEvent) => {
        setTargetId(parseInt(e.currentTarget.id))
        actionState(!state)
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