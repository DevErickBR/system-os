import React, { useState } from "react";
import { Container, Icon, SideMenu, Wrapper } from "./styles"
import { Button } from "../Button/Button";
import * as FaIcons from "react-icons/fa6";
import Logo from "../../../public/logo-notefix.svg"
import { Link } from "react-router-dom";
import { MagicMotion } from "react-magic-motion";



const Header: React.FC = () => {
    const [showMenu, menuIsOpen] = useState(false)
    const setIconMenu = () => {
        menuIsOpen(!showMenu)
    }

    return (
        <Wrapper>
            <Container>
                <Icon onClick={setIconMenu}>
                    {showMenu ? <FaIcons.FaXmark /> : <FaIcons.FaBars />}
                </Icon>
                <img src={Logo} />
            </Container>
            <SideMenu Menu={showMenu}>
                <li>
                    <Link onClick={() => { menuIsOpen(!showMenu) }} to="/clientes">< Button title="Clientes" IconButton={FaIcons.FaAddressBook} /></Link>
                    < Button title="Ordem de Serviços" IconButton={FaIcons.FaClipboard} />
                    < Button title="Financeiro" IconButton={FaIcons.FaMoneyBill1Wave} />
                    < Button title="Estoque" IconButton={FaIcons.FaTag} />
                    < Button title="Venda" IconButton={FaIcons.FaCartShopping} />
                </li>
            </SideMenu>
        </Wrapper>
    );
}

export default Header;