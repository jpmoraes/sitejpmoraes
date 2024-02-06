import styled from "styled-components";
import logo from "../../Assets/imagens/jpmoraes.png";

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
      <Logo_img
        src={logo}
        alt="logo"
        className="logo-img"
        height="90%"
      ></Logo_img>
    </LogoContainer>
  );
}

export default Logo;
