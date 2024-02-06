import Logo from "../Logo";
import IconesHeader from "../Header/IconesHeader";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgb(236, 239, 243);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const PCont = styled.p`
  text-align: center;
  text-align:left;
`;

const PEmail = styled.p`
    text-align:left;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <div>
        <strong>
          <PCont>Contatos: </PCont>
        </strong>
        <PEmail>e-mail: morais566@gmail.com</PEmail>
      </div>
      <IconesHeader />
    </FooterContainer>
  );
}

export default Footer;
