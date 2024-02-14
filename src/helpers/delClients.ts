
import { Clients } from '../data/ClientsData';

export const delCliets = (id: number) => {
    console.log(id)
    Clients.splice(id, 1)
    console.log(Clients)
    return Clients
}