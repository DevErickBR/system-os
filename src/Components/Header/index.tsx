import React, { useState } from "react";
import { Container, Icon, SideMenu } from "./styles"
import { Button } from "../Button/Button";
import * as FaIcons from "react-icons/fa6";
import Logo from "../../../public/logo-notefix.svg"



const Header: React.FC = () => {
    const [showMenu, menuIsOpen] = useState(false)
    const setIconMenu = () => {
        menuIsOpen(!showMenu)
    }

    return (
        <>
            <Container>
                <Icon onClick={setIconMenu}>
                    {showMenu ? <FaIcons.FaXmark /> : <FaIcons.FaBars />}
                </Icon>
                <img src={Logo} />
            </Container>
            <SideMenu Menu={showMenu}>
                <li>
                    < Button title="Clientes" IconButton={FaIcons.FaAddressBook} />
                    < Button title="Ordem de Serviços" IconButton={FaIcons.FaClipboard} />
                    < Button title="Financeiro" IconButton={FaIcons.FaMoneyBill1Wave} />
                    < Button title="Estoque" IconButton={FaIcons.FaTag} />
                    < Button title="Venda" IconButton={FaIcons.FaCartShopping} />
                </li>
            </SideMenu>

        </>
    );
}

export default Header;