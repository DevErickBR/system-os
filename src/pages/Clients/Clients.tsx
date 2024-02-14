import { Container, HeaderTable, FormClients, Wrapper, BoxButtons, ContainerForm, ButtonAction } from "./styles";
import * as FaIcons from "react-icons/fa6"
import TableItens from "../../Components/TableItens/TableItens";
import InputForm from "../../Components/Input/Input"
import { Person } from "../../types/Person";
import { Clients } from "../../data/ClientsData";
import { useState } from "react";



const ClientsPage = () => {
    const [form, showForm] = useState<boolean>(false);
    const [listClients, setListClients] = useState<Person[]>(Clients)
    return (
        <Wrapper>
            {form &&
                <FormClients>
                    <ContainerForm>
                        <InputForm title="nome" id="name" />
                        <InputForm title="Contato" id="contact" />
                        <InputForm title="CPF" id="name" />
                        <BoxButtons>
                            <ButtonAction onClick={() => showForm(!form)} backGround="#FF0000">{<FaIcons.FaRegRectangleXmark />}Cancelar</ButtonAction>
                            <ButtonAction backGround="#00FF48">{<FaIcons.FaRegSquareCheck />}Cadastrar</ButtonAction>
                        </BoxButtons>
                    </ContainerForm>
                </FormClients>
            }
            <Container>
                <div>
                    <HeaderTable>
                        Clientes
                        <button onClick={() => showForm(!form)}>Adicionar</button>
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
                        {listClients.map((e, index) => (
                            <TableItens key={index} id={index} name={e.name} contact={e.contact} cpf={e.cpf} />
                        ))}
                    </table>

                </div>
            </Container>

        </Wrapper>
    );

};

export default ClientsPage;
