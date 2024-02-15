import { Person } from "../types/Person";

// type Props = {
//     a: Person[];
//     n: string;
//     co: string;
//     cp: string;
//     setState: (a: Boolean) => void
// }

export const actionAddClients = (a: Person[], n: string, co: string, cp: string, setState: (o: boolean) => void, setName: (o: string) => void, setContact: (o: string) => void, setCpf: (o: string) => void) => {
    if (n != "" && co != "" && cp != "") {
        a.push({ id: null, name: n, contact: co, cpf: cp })
        setName("")
        setContact("")
        setCpf("")
        setState(false)
        alert(`Usuarios ${n} adicionado com sucesso`)
    } else {
        alert("Preencha todos os campos")
    }
};
