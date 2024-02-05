import Input from "../../Input";
import styled from "styled-components";
import { useState } from "react";
import { projetos } from "./dadosPesquisado";
import { Titulo } from "../../Props";
import { Subtitulo } from "../../Props";



const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  height: 30%;
  background-color: #2F373A;
  margin-bottom: 2px;
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
`;

const liResultado = styled.li`
  display: flex;
  justify-content: center;

  &:hover {
    border: 1px solid white;
  }
`;

const luResultado = styled.ul`
  display: flex;
  justify-content: center;
`;

function Pesquisa() {
  const [projetoPesquisado, setProjetoDigitado] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo cor="#fff">Produções</Titulo>
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
