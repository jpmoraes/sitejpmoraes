import { SectionContainer } from "../../Props";
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

const LiResultado = styled.li`
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;

const UlResultado = styled.ul`
  display: flex;
  justify-content: center;
`;

function Interesse() {
  return (
    <SectionContainer>
      <Titulo cor="#C2B990">Interesse</Titulo>
      <UlResultado>
        <LiResultado>
          <CardRecomenda
            titulo="Robótica"
            subtitulo="Habilidades do Século XXI"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>

        <LiResultado>
          <CardRecomenda
            titulo="Tecnologia Digitais Educacionais"
            subtitulo="Uso de ferramentas digitais nas escolas"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>
      </UlResultado>
    </SectionContainer>
  );
}

export default Interesse;
