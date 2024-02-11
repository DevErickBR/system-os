import { Container } from "./styles";
import TableItens from "../../Components/TableItens/TableItens";
import { Clients } from "../../data/ClientsData"

const ClientsPage = () => {
    return (
        <Container>
            <div>
                Clientes
                <button>Adicionar</button>
                <table>
                    <tr className="header">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>CPF</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    {Clients.map((e, index) => (
                        <TableItens key={index} id={index} name={e.name} contact={e.contact} cpf={e.cpf} />
                    ))}
                </table>
            </div>
        </Container>
    );

};

export default ClientsPage;
