import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";
import CardRecomenda from "./Card";
import FotoFundo from "../../../Assets/imagens/fundo_sec01.jpg";
import Maker from "../../../Assets/imagens/culturaMaker.jpg";
import DesenSof from "../../../Assets/imagens/desenSof.jpeg";
import CienDados from "../../../Assets/imagens/cienciaDados.jpg";

const Resultado = styled.div`
  height: auto;
  margin-left: 700px;
`;

const LiResultado = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 80px;
`;

const UlResultado = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Permitir que os itens quebrem para a próxima linha */
  margin-bottom: 60px;
`;

const SectionContainerInt = styled(SectionContainer)`
  padding: 60px;
  text-align: center;
  background-color: #1961D7;
`;

const TituloAlinhado = styled(Titulo)`
  text-align: left;
  margin-left: 47%;
`;

function Interesse() {
  return (
    <SectionContainerInt>
      <TituloAlinhado cor="#fff">Veja os assuntos estudados</TituloAlinhado>
      <Resultado>
        <UlResultado>
          <LiResultado>
            <CardRecomenda
              titulo="Desenvolvimento de Software"
              subtitulo="Desenvolvimento de software, web e dispositivos móveis"
              descricaoModal="Teste de descrição"
              img={DesenSof}
            />
          </LiResultado>

          <LiResultado>
            <CardRecomenda
              titulo="Cultura Maker"
              subtitulo="Implementação de Robótica no desenvolvimento da aprendizagem"
              descricaoModal="Teste de descrição"
              img={Maker}
            />
          </LiResultado>
        </UlResultado>

        <UlResultado>
          <LiResultado>
            <CardRecomenda
              titulo="Ciências de Dados"
              subtitulo="Estudos exploratórios e análises de dados"
              descricaoModal="Teste de descrição"
              img={CienDados}
            />
          </LiResultado>

          <LiResultado>
            <CardRecomenda
              titulo="Educação e Computação"
              subtitulo="Uso da computação no mundo educacional"
              descricaoModal="A integração da computação na educação é um passo crucial para preparar os alunos para os desafios do século 21. A tecnologia não apenas facilita o acesso à informação, mas também desenvolve habilidades essenciais, como pensamento crítico, resolução de problemas e colaboração. A educação em computação não se limita apenas ao aprendizado de programação; ela promove a alfabetização digital e incentiva a criatividade. Ao incorporar a tecnologia de maneira significativa no ambiente educacional, podemos capacitar os estudantes a se tornarem cidadãos digitalmente competentes e preparados para enfrentar as demandas da sociedade moderna."
              img={FotoFundo}
            />
          </LiResultado>
        </UlResultado>
      </Resultado>
    </SectionContainerInt>
  );
}

export default Interesse;
