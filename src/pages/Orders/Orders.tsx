import { useState } from "react";
import { ListItem } from "../../Components/ListItem/ListItem";
import { Orders } from "../../data/OrdersData";
import { ListHeader, Wrapper, ContainerTable, ConstainerOs } from "./styles"
import { Order } from "../../types/Order";



export const OrderService = () => {


    const [listOrders, setListOrders] = useState<Order[]>(Orders);
    const [showOs, setShowOs] = useState<boolean>(false);

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
                        />
                    )
                    }
                </ContainerTable>
            }
            {showOs &&
                <ConstainerOs>
                </ConstainerOs>

            }
        </Wrapper>

    );
}