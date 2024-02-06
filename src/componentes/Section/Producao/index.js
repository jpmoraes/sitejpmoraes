import React, { useState } from "react";
import styled from "styled-components";
import { projetos } from "./dadosPesquisado";
import { Titulo, Subtitulo } from "../../Props";
import Input from "../../Input";

const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  background-color: #2f373a;
  margin-bottom: 2px;
  height: 1000px;
  width: 100%;
`;

const Resultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const LiResultado = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 400px;
  height: auto;

  &:hover {
    border: 1px solid white;
  }

  p {
    width: 200px;
    margin: 10px 0;
    text-align: center;
  }

  img {
    width: 300px;
    height: auto;
  }
`;

function Pesquisa() {
  const [projetoPesquisado, setProjetoDigitado] = useState(projetos);

  const handleSearch = (event) => {
    const userText = event.target.value;
    const resultSearch = projetos.filter((livro) =>
      livro.nome.toLowerCase().includes(userText.toLowerCase())
    );
    setProjetoDigitado(resultSearch);
  };

  return (
    <PesquisaContainer>
      <Titulo cor="#fff">Produções</Titulo>
      <Subtitulo>Pesquise projetos do seu interesse</Subtitulo>
      <Input placeholder="Buscar referências" onBlur={handleSearch} />
      <br /> <br />
      <Resultado>
        {projetoPesquisado.map((livro, index) => (
          <LiResultado key={index}>
            <p>{livro.nome}</p>
            <a href={livro.srcPDF} download={`${livro.nome}.pdf`}>
              <img src={livro.src} alt={livro.nome} />
            </a>
          </LiResultado>
        ))}
      </Resultado>
    </PesquisaContainer>
  );
}

export default Pesquisa;
