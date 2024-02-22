import { ListContainer } from "./styled"

type Props = {
    id:number
    client: string;
    dataStart:string;
    dataEnd: string;
    status:string;
}

export const ListItem = ({id, client, dataStart,dataEnd,status}: Props) => {
    return (
        <ListContainer>
                    <tr>{id}</tr>
                    <tr>{client}</tr>
                    <tr>{dataStart}</tr>
                    <tr>{dataEnd}</tr>
                    <tr>{status}</tr>
        </ListContainer>
    )
}