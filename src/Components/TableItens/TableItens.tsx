import * as FaIcons from "react-icons/fa6";
import { Table } from "./styles"
import { delCliets } from "../../helpers/delClients";
import { Person } from "../../types/Person";

type Props = {
    id: number,
    name: string,
    contact: string,
    cpf: string,
    state: Person[],
    setState: (a: Person[]) => void
}

const TableItens = ({ id, name, contact, cpf, state, setState }: Props) => {
    return (
        <Table>
            <th>{id}</th>
            <th>{name}</th>
            <th>{contact}</th>
            <th>{cpf}</th>
            <th className="icon" ><FaIcons.FaPen /></th>
            <th className="icon" onClick={() => { delCliets(id, state, setState) }}><FaIcons.FaTrashCan /></th>
        </Table>
    );
};

export default TableItens;