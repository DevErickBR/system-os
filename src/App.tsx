import Header from "./Components/Header/index";
import ClientsPage from "./pages/Clients/Clients";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./styled";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { useState } from "react";


const App = () => {

  const [togleTheme, setTogleTheme] = useState(light)
  const changeTheme = (a: boolean) => {
    !a ? setTogleTheme(dark) : setTogleTheme(light)
  };

  return (
    <ThemeProvider theme={togleTheme}>
      <GlobalStyle />
      <AppDiv>
        <Header setState={changeTheme} />
        <div>
          <Routes >
            <Route path="/clientes" element={<ClientsPage />} />
          </Routes>
        </div>
      </AppDiv>
    </ThemeProvider>
  )
};

export default App