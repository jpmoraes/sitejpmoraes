import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import { Subtitulo } from "../../Props";
import styled from "styled-components";


const SectionContainerCont = styled(SectionContainer)`
  padding: 60px;
  text-align: center;
  background-color: #748E81;
`;


function Contribua() {
  return (
    <SectionContainerCont>
      <Titulo cor="#fff">Contribua</Titulo>
      <Subtitulo>Aqui as ideias ganham vida</Subtitulo>
    </SectionContainerCont>
  );
}

export default Contribua;
