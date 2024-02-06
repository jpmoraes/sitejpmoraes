import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";
import Foto from "../../../Assets/imagens/jp.jpg";
import FotoFundo from "../../../Assets/imagens/fundo_sec01.jpg";
import videoFundo from "/Users/instrutor/JP/ReactJS_book/my-app/src/Assets/video/fundo_QSE1.mp4";

const FotoRedonda = styled.div`
  width: 450px;
  height: auto;
  border-radius: 5%;
  overflow: hidden;
  margin-right: 56px;
`;

const Imagem = styled.img`
  width: 100%;
  height: auto;
`;

const TextP = styled.p`
  font-size: 25px;
  line-height: 2;
  width: 50%;
  text-align: justify;
  background-color: #457d8f;
  padding: 50px;
  opacity: 0.7;
`;

const DivOrg = styled.div`
  display: flex;
  text-align: left;
  margin-left: 450px;
`;

const DivOrgGeral = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloAlinhado = styled(Titulo)`
  text-align: left;
  margin-left: 37.3%;
  margin-top: 500px;
`;

const ImgFundoContainer = styled.div`
  position: relative;
`;

const DivOrgGeralOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgFundo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const VideoFundo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

function SouEu() {
  return (
    <SectionContainer>
      <ImgFundoContainer>
        <VideoFundo autoPlay loop muted>
          <source src={videoFundo} type="video/mp4" />
        </VideoFundo>
        {/*<ImgFundo src={FotoFundo} alt="Minha Foto" />*/}
        <DivOrgGeralOverlay>
          <TituloAlinhado cor="#E69E67">Quem sou eu?</TituloAlinhado>
          <DivOrgGeral>
            <DivOrg>
              <FotoRedonda>
                <Imagem src={Foto} alt="Minha Foto" />
              </FotoRedonda>
              <TextP>
                Olá, sou João Pedro Moraes (JP Moraes), Licenciado da Computação
                pelo Instituto Federal de Educação, Ciência e Tecnologia da
                Bahia (2017). Pós-graduado em Educação Profissional e
                Tecnológica pela Faculdade São Luiz (2019). Pós-graduado em
                Aplicações para desenvolvimento Web (2021) pela faculdade
                Anhanguera. Mestre em Ciência da Computação pela Universidade
                Estadual de Feira de Santana (2023) e aluno especial do
                Doutorado em Difusão do Conhecimento (UNEB, UFBA e IFBA).
                Navegue pelo site e conheça meus interreses de estudos, projetos
                desenvolvidos e ações participadas.
              </TextP>
            </DivOrg>
          </DivOrgGeral>
        </DivOrgGeralOverlay>
      </ImgFundoContainer>
    </SectionContainer>
  );
}

export default SouEu;
