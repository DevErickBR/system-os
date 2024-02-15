import { Person } from '../types/Person';

export const delCliets = (id: number, list: Person[], actionState: (a: Person[]) => void) => {
    let confirmed = confirm(`Você conforma a exlusão do Cliente: ${list[id].name}`)
    if (confirmed) {
        let newList = list.filter((intem, index) => index !== id)
        actionState(newList)
    }
}