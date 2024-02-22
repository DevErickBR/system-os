import { useState } from "react";
import { ListItem } from "../../Components/ListItem/ListItem";
import { Orders } from "../../data/OrdersData";
import { ListHeader, Wrapper, ContainerTable } from "./styles"
import { Order } from "../../types/Order";

//const [listOrders, setListOrders] = useState<Order[]>(Orders)

export const OrderService = () => {
    return (
        <Wrapper>
            <ContainerTable>
            <ListHeader>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Data de Inicio</th>
                    <th>Data de Finathzação</th>
                    <th>Status</th>
            </ListHeader>
            {Orders.map((e, index) => 
                <ListItem key={index} id={index} client={e.Client}
                 dataStart={e.dateStart} dataEnd={e.dateEnd} status={e.status} />
            )
            }  
            </ContainerTable>
        </Wrapper>

    );
}