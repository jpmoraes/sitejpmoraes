import Logo from "../Logo";
import IconesHeader from "../Header/IconesHeader";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgb(236, 239, 243);
  display: flex;
  justify-content: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <IconesHeader />
    </FooterContainer>
  );
}

export default Footer;
