import * as FaIcons from "react-icons/fa6";
import { Table } from "./styles"
import { delCliets } from "../../helpers/delClients";

type Props = {
    id: number,
    name: string,
    contact: string,
    cpf: string,
}

const TableItens = ({ id, name, contact, cpf, }: Props) => {
    return (
        <Table>
            <th>{id}</th>
            <th>{name}</th>
            <th>{contact}</th>
            <th>{cpf}</th>
            <th className="icon" ><FaIcons.FaPen /></th>
            <th className="icon" onClick={() => { delCliets() }}><FaIcons.FaTrashCan /></th>
        </Table>
    );
};

export default TableItens;