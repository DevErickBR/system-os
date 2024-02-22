import { useState } from "react";
import { ListItem } from "../../Components/ListItem/ListItem";
import { Orders } from "../../data/OrdersData";
import { ListHeader, Wrapper } from "./styles"
import { Order } from "../../types/Order";

const [listOrders, setListOrders] = useState<Order[]>(Orders)

export const OrderService = () => {
    return (
        <Wrapper>
            <ListHeader>
                <li>ID</li>
                <li>Cliente</li>
                <li>Data de Inicio</li>
                <li>Data de Finalização</li>
                <li>Status</li>
            </ListHeader>
            <ListItem state={listOrders} />
        </Wrapper>

    );
}