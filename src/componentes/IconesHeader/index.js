import git from "../../imagens/giticone.png";
import lin from "../../imagens/in.png";
import "./style.css";

const icones = [
  { icon: git, link: "https://github.com/jpmoraes" },
  {
    icon: lin,
    link: "https://www.linkedin.com/in/jo%C3%A3o-pedro-moraes-577628225",
  },
];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <a href={icone.link}>
          <li className="icone">
            <img src={icone.icon}></img>
          </li>
        </a>
      ))}
    </ul>
  );
}

export default IconesHeader;
