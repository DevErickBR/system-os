import { useState } from "react";
import { ListItem } from "../../Components/ListItem/ListItem";
import { Orders } from "../../data/OrdersData";
import { ListHeader, Wrapper, ContainerTable, ConstainerOs } from "./styles"
import { Order } from "../../types/Order";
import { InputOrder } from "../../Components/InputOrder/InputOrder";
import { BoxMensage } from "../../Components/BoxMensage/BoxMensage";
import Button from "../../Components/Button/Button";
import * as FaIcons from "react-icons/fa6";


export const OrderService = () => {


    const [listOrders, setListOrders] = useState<Order[]>(Orders);
    const [showOs, setShowOs] = useState<boolean>(false);
    const [targetOrder, setTargetOrder] = useState<number>()

    // function for delete Order Service...

    const deleteOrder = () => {
        let confirmed = confirm(`Tem Certeza que deseja Excluir a Ordem De Serviço`)
        if(targetOrder != undefined && confirmed) {
            let newList = listOrders.filter((intem, index) => index !== targetOrder)
            setListOrders(newList)
            setShowOs(!showOs)
            setTargetOrder(undefined)
        }
        
    }

    return (
        <Wrapper>
            {showOs == false &&
                <ContainerTable>
                    <ListHeader>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data de Inicio</th>
                        <th>Data de Finathzação</th>
                        <th>Status</th>
                    </ListHeader>
                    {listOrders.map((e, index) =>
                        <ListItem key={index} id={index} client={e.Client}
                            dataStart={e.dateStart} dataEnd={e.dateEnd} status={e.status} actionState={setShowOs} state={showOs}
                            setTargetId={setTargetOrder}
                        />
                    )
                    }
                </ContainerTable>
            }
            {showOs &&
                <ConstainerOs>
                    { targetOrder != null &&
                    <>
                    <div className="headerOs">
                        <InputOrder id="divClient" nameInput="Client" titleInput="Cliente" 
                        valueInput={listOrders[targetOrder].Client.toUpperCase()}
                        />
                        <InputOrder id="divDataStart" nameInput="dataStart" titleInput="Data de Entrada" 
                        valueInput={listOrders[targetOrder].dateStart}
                        />
                        <InputOrder id="divDataEnd" nameInput="dataEnd" titleInput="Data de Saída" 
                        valueInput={listOrders[targetOrder].dateEnd}
                        />
                        <InputOrder id="divPrice" nameInput="price" titleInput="Valor" 
                        valueInput={`R$ ${listOrders[targetOrder].price}`}
                        />    
                    </div>
                    <BoxMensage description={listOrders[targetOrder].msg}/>
                    <div className="boxButton">
                    <Button title="Editar" IconButton={FaIcons.FaPen}/>  
                    <Button title="Salvar" IconButton={FaIcons.FaCheck}/>  
                    <Button title="Excluir" IconButton={FaIcons.FaTrash} action={deleteOrder}/>  
                    <Button title="Sair" IconButton={FaIcons.FaAngleLeft} action={()=>setShowOs(!showOs)}/>
                    </div>
                    </>  
                    }   
                </ConstainerOs>
            }
        </Wrapper>

    );
}