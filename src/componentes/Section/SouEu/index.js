import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";
import Foto from "../../../imagens/jp.jpg";

const FotoRedonda = styled.div`
  width: 100px; /* Defina o tamanho da foto */
  height: auto;
  border-radius: 5%; /* Isso tornará a imagem redonda */
  overflow: hidden; /* Garante que a imagem dentro do div seja cortada corretamente */
  margin-bottom: 20px;
  align-items: center;
  background-color: #e3dbcb;
  display: flex;
  margin: 0 auto;
  max-width: 350px;
  justify-content: space-around;
  width: 15%;
  margin-top: 20px;
`;

const Imagem = styled.img`
  width: 100%; /* A imagem ocupa todo o espaço do contêiner */
  height: auto%;
  align-items: center;
`;

const TextP = styled.p`
  margin: 0 auto;
  font-size: 25px;
  margin-top: 20px;
  line-height: 2;
  margin-right: 100px;
  margin-left: 100px;
`;

function SouEu() {
  return (
    <SectionContainer>
      <Titulo cor="#E69E67">Quem sou eu?</Titulo>
      <FotoRedonda>
        <Imagem src={Foto} alt="Minha Foto" />
      </FotoRedonda>
      <TextP>
        Possui graduação em Licenciatura da Computação pelo Instituto Federal de
        Educação, Ciência e Tecnologia da Bahia (2017). Pós-graduado em Educação
        Profissional e Tecnológica pela Faculdade São Luiz (2019). Pós-graduado
        em Aplicações para desenvolvimento Web (2021) pela faculdade Anhanguera.
        Mestre em Ciência da Computação pela Universidade Estadual de Feira de
        Santana (2023). Têm trabalhos publicados, participações em eventos,
        projetos de ensino e extensão. Atualmente é do grupo de pesquisa RGEAR
        na área de Robótica Educacional, o qual desenvolve uma metodologia de
        ensino para mobilizar uma prática multidisciplinar e formativa em
        ambientes de aprendizagem, reutilizando equipamentos eletroeletrônicos e
        outros materiais recicláveis aplicados aos conceitos aprendidos no
        conteúdo curricular.
      </TextP>
    </SectionContainer>
  );
}

export default SouEu;
