import Logo from "../Logo";
import OpcaoesHeader from "./OpcaoesHeader";
import IconesHeader from "./IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgb(236, 239, 243);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos na página */
  width: 100vw;
  height: 10vh;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcaoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
