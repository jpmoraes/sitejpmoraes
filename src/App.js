import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Componentes/Header";
import Producao from "./Componentes/Section/Producao";
import SouEu from "./Componentes/Section/SouEu";
import Interesse from "./Componentes/Section/Interesses";
import Contribua from "./Componentes/Section/Contribua";
import Acoes from "./Componentes/Section/Acoes";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <SouEu />
      <Interesse />
      <Producao />
      <Acoes />
      <Contribua />
      <Footer />
    </Container>
  );
}

export default App;
