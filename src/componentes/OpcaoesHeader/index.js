import styled from "styled-components";

const Opcao = styled.li`
  list-style: none;
  min-width: 120px;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  display: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    list-style: url("../../imagens/seletor.png");
    color: #134298;
    font-size: 21px;
  }
`;

const Opcoes = styled.ul`
  display: flex;
`;

function OpcaoesHeader() {
  const textOpcoes = [
    "QUEM SOU EU?",
    "INTERESSES",
    "PRODUÇÕES",
    "CONTRIBUA",
    "CONTATOS",
  ];

  return (
    <Opcoes>
      {textOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcaoesHeader;
