import { Container, HeaderTable, FormClients, Wrapper, BoxButtons } from "./styles";
import TableItens from "../../Components/TableItens/TableItens";
import InputForm from "../../Components/Input/Input"
import { Clients } from "../../data/ClientsData";
import { useState } from "react";



const ClientsPage = () => {
    const [form, showForm] = useState<boolean>(false);
    return (
        <Wrapper>
            <FormClients>
                <div>
                    <InputForm title="nome" id="name" />
                    <InputForm title="Contato" id="contact" />
                    <InputForm title="CPF" id="name" />
                    <BoxButtons>
                        <button>Cancelar</button>
                        <button>Cadastrar</button>
                    </BoxButtons>
                </div>
            </FormClients>
            <Container>
                <div>
                    <HeaderTable>
                        Clientes
                        <button>Adicionar</button>
                    </HeaderTable>
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

        </Wrapper>
    );

};

export default ClientsPage;
