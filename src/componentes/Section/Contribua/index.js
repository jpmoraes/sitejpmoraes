import React, { useState } from "react";
import styled from "styled-components";
import { SectionContainer, Titulo, Subtitulo } from "../../Props";

const SectionContainerCont = styled(SectionContainer)`
  padding: 60px;
  text-align: center;
  background-color: #2f373a;
`;

const FormularioContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #457d8f;
`;

const TextArea = styled.textarea`
  width: 700px;
  height: 350px; /* Ou qualquer outra altura desejada */
  padding: 8px; /* Adicione algum preenchimento interno para melhor aparência */
  box-sizing: border-box; /* Garante que o preenchimento não aumente o tamanho total */
  resize: vertical; /* Permite redimensionamento vertical */
  margin-top: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 20px;
`;

const Botao = styled.button`
  background-color: #2f373a;
  color: #457d8f;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 130px;
  margin: 10px auto;
  &:hover {
    cursor: pointer;
  }
`;

function Contribua() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    texto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário, por exemplo, enviar para um servidor.
    console.log("Dados do formulário:", formData);
    // Limpar o formulário após o envio, se necessário.
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      texto: "",
    });
  };

  return (
    <SectionContainerCont>
      <Titulo cor="#fff">Contribua</Titulo>
      <Subtitulo>Aqui as ideias ganham vida</Subtitulo>

      <FormularioContainer>
        <form onSubmit={handleSubmit}>
          <Label> Nome: </Label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <br /> <br />
          <Label> Email:</Label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br /> <br />
          <Label> Telefone: </Label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <br /> <br />
          <label style={{ marginRight: "580px", fontSize: "25px" }}>
            Descrição:
          </label>
          <TextArea
            name="texto"
            value={formData.texto}
            onChange={handleChange}
            required
          />
          <br /> <br />
          <Botao type="submit">Enviar</Botao>
        </form>
      </FormularioContainer>
    </SectionContainerCont>
  );
}

export default Contribua;
