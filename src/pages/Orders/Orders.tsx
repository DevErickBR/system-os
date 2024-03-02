import { useState } from "react";
import { ListItem } from "../../Components/ListItem/ListItem";
import { Orders } from "../../data/OrdersData";
import { ListHeader, Wrapper, ContainerTable, ConstainerOs } from "./styles"
import { Order } from "../../types/Order";
import { InputOrder } from "../../Components/InputOrder/InputOrder";
import { BoxMensage } from "../../Components/BoxMensage/BoxMensage";


export const OrderService = () => {


    const [listOrders, setListOrders] = useState<Order[]>(Orders);
    const [showOs, setShowOs] = useState<boolean>(false);
    const [targetOrder, setTargetOrder] = useState<number>()

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
                    <div id="headerOs">
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
                    <BoxMensage/>  
                    </>  
                    }   
                </ConstainerOs>
            }
        </Wrapper>

    );
}