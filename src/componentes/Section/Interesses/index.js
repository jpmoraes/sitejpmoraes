import { sectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";
import CardRecomenda from "./Card";

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 200px;
`;

const liResultado = styled.li`
  display: flex;
  justify-content: center;
`;

const luResultado = styled.ul`
  display: flex;
  justify-content: center;
`;

function Interesse() {
  return (
    <sectionContainer>
      <Titulo cor="#C2B990">Interesse</Titulo>
      <luResultado>
        <liResultado>
          <CardRecomenda
            titulo="Robótica"
            subtitulo="Habilidades do Século XXI"
            descricao="Construindo uma aplicação com a plataforma Google"
          ></CardRecomenda>
        </liResultado>
        <liResultado>
          <CardRecomenda></CardRecomenda>
        </liResultado>
      </luResultado>
    </sectionContainer>
  );
}

export default Interesse;
