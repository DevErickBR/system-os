import { useState } from "react";
import menuIcon from '../assets/icons/menu-hamburguer.svg';
import menuIconClicked from '../assets/icons/tipo-de-barras.svg';

const [icon, changeIcon] = useState<string>(menuIcon);

let Button = document.getElementById('menuButton');
Button?.querySelector('img')?.setAttribute('src', icon)

const ActionButtonMenuClick = () => {
    changeIcon(
        icon == menuIcon ? menuIconClicked : menuIcon
    )
    return (console.log(Button))
}

export default ActionButtonMenuClick