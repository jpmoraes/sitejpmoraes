import git from "../../imagens/giticone.png";
import lin from "../../imagens/in.png";
import styled from "styled-components";

const _Icone = styled.li`
  list-style: none;
  margin-right: 25px;
  width: 25px;
`;
const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  max-width: 50px;
  max-height: 50px;
  width: auto;
  height: auto;
`;

const icones = [
  { icon: git, link: "https://github.com/jpmoraes" },
  {
    icon: lin,
    link: "https://www.linkedin.com/in/jo%C3%A3o-pedro-moraes-577628225",
  },
];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <a href={icone.link}>
          <_Icone>
            <Img src={icone.icon} alt="icones"></Img>
          </_Icone>
        </a>
      ))}
    </Icones>
  );
}

export default IconesHeader;
