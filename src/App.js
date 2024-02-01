import Logo from "./componentes/Logo";
import Header from "./componentes/Header";
import Producao from "./componentes/Section/Producao";
import styled from "styled-components";
import SouEu from "./componentes/Section/SouEu";
import Interesse from "./componentes/Section/Interesses";
import Contribua from "./componentes/Section/Contribua";
import Contatos from "./componentes/Section/Contatos";
import Footer from "./componentes/Footer";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SouEu />
      <Interesse />
      <Producao />
      <Contribua />
      <Contatos />
      <Footer />
    </AppContainer>
  );
}

export default App;

// linear-gradient(180deg, #134298 35%, #2bd6ae 165%)
