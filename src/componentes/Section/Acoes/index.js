import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";
import Carrossel from "./carrossel";


const SectionContainerConta = styled(SectionContainer)`
  padding: 60px;
  text-align: center;
  background-color: #748e81;
  hight: 600px;
`;

function Acoes() {
  return (
    <SectionContainerConta>
      <Titulo cor="#fff">Ações</Titulo>
      <Carrossel></Carrossel>
    </SectionContainerConta>
  );
}

export default Acoes;
