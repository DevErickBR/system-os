

let buttonOptions = document.getElementById("menuButton")
let iconButton = document.getElementById("buttonIcon")

const ActionButtonMenuClick = () => {
    iconButton?.removeAttribute("src")
    iconButton?.setAttribute("src", "./assets/icons/tipo-de-barras.svg")
    return (
        iconButton
    )
}

export default ActionButtonMenuClick