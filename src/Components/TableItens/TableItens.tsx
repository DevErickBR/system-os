import * as FaIcons from "react-icons/fa6";
import { Table } from "./styles"

type Props = {
    id: number,
    name: string,
    contact: string,
    cpf: string,
}

const TableItens = ({ id, name, contact, cpf }: Props) => {
    return (
        <Table>
            <th>{id}</th>
            <th>{name}</th>
            <th>{contact}</th>
            <th>{cpf}</th>
            <th><FaIcons.FaPen /></th>
            <th><FaIcons.FaTrashCan /></th>
        </Table>
    );
};

export default TableItens;