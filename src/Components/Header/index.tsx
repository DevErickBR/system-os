import React, { useState } from "react";

import { Container, Icon } from "./styles"
import { FaBars } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import Logo from "../../../public/logo-notefix.svg"

const Header: React.FC = () => {
    const [showMenu, menuIsOpen] = useState(false)
    const setIconMenu = () => {
        menuIsOpen(!showMenu)
    }
    return (
        <Container>
            <Icon onClick={setIconMenu}>
                {showMenu ? <MdOutlineCancel /> : <FaBars />}
            </Icon>
            <img src={Logo} />
        </Container>
    );
}

export default Header;