import styles from './App.module.css';
import { Button } from './Components/Button';
function App() {

  return (
    <>
      <header className={styles.header_principal}>
        <div className={styles.logo_background}>
          <div className={styles.logo}>
            <img src="../public/logo-notefix.svg" width={200}></img>
          </div>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.menu_options}>
            <Button title="Clientes" />
            <Button title="Ordens de Serviço" />
            <Button title="Financeiro" />
            <Button title="Estoque" />
            <Button title="Encomendas" />
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App