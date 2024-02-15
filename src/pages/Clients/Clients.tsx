import { Container, HeaderTable, FormClients, Wrapper, BoxButtons, ContainerForm, ButtonAction } from "./styles";
import * as FaIcons from "react-icons/fa6"
import TableItens from "../../Components/TableItens/TableItens";
import InputForm from "../../Components/Input/Input"
import { Person } from "../../types/Person";
import { Clients } from "../../data/ClientsData";
import { useState } from "react";
import { actionAddClients } from "../../helpers/addClients";


const ClientsPage = () => {
    const [form, showForm] = useState<boolean>(false);
    const [listClients, setListClients] = useState<Person[]>(Clients)
    const [name, setName] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [cpf, setCPF] = useState<string>("")
    return (
        <Wrapper>
            {form &&
                <FormClients>
                    <ContainerForm>
                        <InputForm title="nome" id="name" state={name} setState={setName} />
                        <InputForm title="Contato" id="contact" state={contact} setState={setContact} />
                        <InputForm title="CPF" id="name" state={cpf} setState={setCPF} />
                        <BoxButtons>
                            <ButtonAction onClick={() => showForm(!form)} backGround="#FF0000">{<FaIcons.FaRegRectangleXmark />}Cancelar</ButtonAction>
                            <ButtonAction onClick={() => actionAddClients(listClients, name, contact, cpf, showForm, setName, setContact, setCPF)} backGround="#00FF48">{<FaIcons.FaRegSquareCheck />}Cadastrar</ButtonAction>
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
                            <TableItens key={index} id={index} name={e.name} contact={e.contact}
                                cpf={e.cpf} state={listClients} setState={setListClients} />
                        ))}
                    </table>

                </div>
            </Container>

        </Wrapper>
    );

};

export default ClientsPage;
