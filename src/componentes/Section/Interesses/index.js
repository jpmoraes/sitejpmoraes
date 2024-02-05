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
  height: auto;
  padding: 50px;
`;

const LiResultado = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 500px;
`;

const UlResultado = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Permitir que os itens quebrem para a próxima linha */
  margin-bottom: 200px;
`;

const SectionContainerInt = styled(SectionContainer)`
  padding: 90px;
  text-align: center; /* Centralizar o texto dentro das colunas */
`;

function Interesse() {
  return (
    <SectionContainerInt>
      <Titulo cor="#C2B990">Interesse</Titulo>

      <UlResultado>
        <LiResultado>
          <CardRecomenda
            titulo="Desenvolvimento de Software"
            subtitulo="Desenvolvimento de software, web e dispositivos móveis"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>

        <LiResultado>
          <CardRecomenda
            titulo="Robótica"
            subtitulo="Implementação de Robótica no desenvolvimento da aprendizagem"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>
      </UlResultado>

      <UlResultado>
        <LiResultado>
          <CardRecomenda
            titulo="Ciências de Dados"
            subtitulo="Estudos exploratórios e análises de dados"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>

        <LiResultado>
          <CardRecomenda
            titulo="Educação e Computação"
            subtitulo="Uso da computação no mundo educacional"
            descricao="Construindo uma aplicação com a plataforma Google"
          />
        </LiResultado>
      </UlResultado>
    </SectionContainerInt>
  );
}

export default Interesse;
