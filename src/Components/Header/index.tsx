import React, { useState } from "react";
import { Container, Icon, SideMenu, Wrapper, Switch, Box } from "./styles"
import { Button } from "../Button/Button";
import * as FaIcons from "react-icons/fa6";
import Logo from "../../../public/logo-notefix.svg"
import { Link } from "react-router-dom";

type Props = {
    setState: (a: boolean) => void
}


const Header = ({ setState }: Props) => {
    const [showMenu, menuIsOpen] = useState(false)
    const [theme, setTheme] = useState<boolean>(false)
    const setIconMenu = () => {
        menuIsOpen(!showMenu)
    }

    const togleTheme = () => {
        setTheme(!theme)
        setState(theme)
    }

    return (
        <Wrapper>
            <Container>
                <Box>
                    <Icon onClick={setIconMenu}>
                        {showMenu ? <FaIcons.FaXmark /> : <FaIcons.FaBars />}
                    </Icon>
                    <img src={Logo} />
                </Box>
                <Switch>

                    <input type="checkbox" id="switchTheme" checked={theme} onChange={togleTheme} />
                    <label htmlFor="switchTheme">
                        {theme ? <FaIcons.FaMoon /> : <FaIcons.FaSun />}
                    </label>
                </Switch>
            </Container>
            <SideMenu Menu={showMenu}>
                <li>
                    <Link onClick={() => { menuIsOpen(!showMenu) }} to="/clientes">< Button title="Clientes" IconButton={FaIcons.FaAddressBook} /></Link>
                    <Link onClick={() => { menuIsOpen(!showMenu) }} to="/ordensServico">< Button title="Ordem de Serviços" IconButton={FaIcons.FaClipboard} /></Link>
                    < Button title="Financeiro" IconButton={FaIcons.FaMoneyBill1Wave} />
                    < Button title="Estoque" IconButton={FaIcons.FaTag} />
                    < Button title="Venda" IconButton={FaIcons.FaCartShopping} />
                </li>
            </SideMenu>
        </Wrapper>
    );
}

export default Header;