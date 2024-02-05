import { SectionContainer } from "../../Props";
import { Titulo } from "../../Props";
import styled from "styled-components";


const SectionContainerConta = styled(SectionContainer)`
  padding: 60px;
  text-align: center;
  background-color: #2F373A;
`;

function Contatos() {
  return (
    <SectionContainerConta>
      <Titulo cor="#fff">Contatos</Titulo>
    </SectionContainerConta>
  );
}

export default Contatos;
