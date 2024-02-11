import Header from "./Components/Header/index";
import ClientsPage from "./pages/Clients/Clients";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./styled";

const App = () => {
  return (
    <AppDiv>
      <Header />
      <div>
        <Routes >
          <Route path="/clientes" element={<ClientsPage />} />
        </Routes>
      </div>
    </AppDiv>
  )
};

export default App