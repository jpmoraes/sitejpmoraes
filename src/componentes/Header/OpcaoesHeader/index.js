import styled from "styled-components";

const Opcao = styled.li`
  list-style: none;
  min-width: 120px;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
  display: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  margin-right: 40px;
  margin-top: 50px;

  &:hover {
    list-style: url("../../imagens/seletor.png");
    color: #bd8439;
    font-size: 26px;
  }
`;

const Opcoes = styled.ul`
  display: flex;
`;

function OpcaoesHeader() {
  const textOpcoes = [
    "Quem sou eu?",
    "Interesses",
    "Produções",
     "Ações", 
     "Contribua",
   
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
