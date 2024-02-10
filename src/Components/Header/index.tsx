import React, { useState } from "react";
import { Container, Icon, SideMenu } from "./styles"
import { Button } from "../Button/Button";
import * as FaIcons from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
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
                    {showMenu ? <MdOutlineCancel /> : <FaIcons.FaBars />}
                </Icon>
                <img src={Logo} />
            </Container>
            <SideMenu Menu={showMenu}>
                <li>
                    < Button title="Clientes" IconButton={FaIcons.FaAddressBook} />
                </li>
            </SideMenu>

        </>
    );
}

export default Header;