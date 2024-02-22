import { Order } from "../../types/Order"
import { ListContainer } from "./styled"

type Props = {
    state: Order[]
}

export const ListItem = ({ state }: Props) => {
    return (
        <ListContainer>
            {state.map((e, index) => (
                <>
                    <li key={index}>{e.id = index}</li>
                    <li>{e.Client}</li>
                    <li>{e.dateStart}</li>
                    <li>{e.dateEnd}</li>
                    <li>{e.status}</li>
                </>
            ))}
        </ListContainer>
    )



}