import Logo from "./componentes/Logo";
import Header from "./componentes/Header";
import Pesquisa from "./componentes/Pesquisa";
import styled from "styled-components";
import SouEu from "./componentes/Section/SouEu";
import Interesse from "./componentes/Section/Interesses";
import Contribua from "./componentes/Section/Contribua";
import Contatos from "./componentes/Section/Contatos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3d3d3d;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SouEu/>
      <Interesse/>
      <Pesquisa />
      <Contribua/>
      <Contatos/>
    </AppContainer>
  );
}

export default App;

// linear-gradient(180deg, #134298 35%, #2bd6ae 165%)
