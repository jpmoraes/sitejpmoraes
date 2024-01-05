import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { projetos } from "./dadosPesquisado";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  height: 30%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 200px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const liResultado = styled.li`
  display: flex;
  justify-content: center;
`;

const luResultado = styled.ul`
  display: flex;
  justify-content: center;
`;

function Pesquisa() {
  const [projetoPesquisado, setProjetoDigitado] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Aqui as ideias ganham vida</Titulo>
      <Subtitulo>Pesquise projetos do seu interesse</Subtitulo>
      <Input
        placeholder="Deixe sua mensagem"
        onBlur={(event) => {
          const userText = event.target.value;
          const resultSearh = projetos.filter((livro) =>
            livro.nome.includes(userText)
          );
          setProjetoDigitado(resultSearh);
        }}
      />
      <luResultado>
        <Resultado>
          {projetoPesquisado.map((livro) => (
            <liResultado>
              <p>{livro.nome}</p>
              <img src={livro.src}></img>
            </liResultado>
          ))}
        </Resultado>
      </luResultado>
    </PesquisaContainer>
  );
}

export default Pesquisa;
