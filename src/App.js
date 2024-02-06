import Header from "./Componentes/Header";
import Producao from "./Componentes/Section/Producao";
import styled from "styled-components";
import SouEu from "./Componentes/Section/SouEu";
import Interesse from "./Componentes/Section/Interesses";
import Contribua from "./Componentes/Section/Contribua";
import Acoes from "./Componentes/Section/Acoes";
import Footer from "./Componentes/Footer";

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
      <Acoes />
      <Contribua />
      <Footer />
    </AppContainer>
  );
}

export default App;

// linear-gradient(180deg, #134298 35%, #2bd6ae 165%)
