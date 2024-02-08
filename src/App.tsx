import styles from './App.module.css';
import menuIcon from './assets/icons/menu-hamburguer.svg';
import { Button } from './Components/Button/Button';
import actionButton from './helpers/actionButtonMenu'



function App() {

  return (
    <>
      <header className={styles.header_principal}>
        <div id='menuButton' className={styles.menu_icon} onClick={() => actionButton()}>
          <img src={menuIcon} id='buttonIcon' />
        </div>
        <div className={styles.logo_background}>
          <div className={styles.logo}>
            <img src="../public/logo-notefix.svg" width={200}></img>
          </div>
        </div>
      </header>
      <div>
        <div className={styles.menu}>
          <ul className={styles.menu_options}>
            <Button title="Clientes" />
            <Button title="Ordens de Serviço" />
            <Button title="Financeiro" />
            <Button title="Estoque" />
            <Button title="Encomendas" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default App