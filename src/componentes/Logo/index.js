import styled from "styled-components";
import logo from "../../imagens/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const Logo_img = styled.img`
  margin-right: 10px;
`;

const Logo_p = styled.p`
  color: rgb(25, 37, 37);
`;

function Logo() {
  return (
    <LogoContainer>
      <Logo_img src={logo} alt="logo" className="logo-img"></Logo_img>
      <Logo_p className="p-Logo">
        <strong>JP</strong>Moraes
      </Logo_p>
    </LogoContainer>
  );
}

export default Logo;
