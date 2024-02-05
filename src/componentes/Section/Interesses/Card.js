import React, { useState } from "react";
import styled from "styled-components";
import { Titulo } from "../../Props";
import Modal from "./modal"; // Importe o componente Modal

const Card = styled.div`
  align-items: center;
  background-color: #FFE8D1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 450px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Botao = styled.button`
  background-color: #457D8F;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 130px;
  margin-left: 20px;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

function CardRecomenda({ titulo, subtitulo, descricao, img, descricaoModal }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card>
        <div>
          <Titulo tamanhoFonte="16px" cor="#457D8F" alinhamento="left">
            {titulo}
          </Titulo>
          <Subtitulo>{subtitulo}</Subtitulo>
          <Descricao>{descricao}</Descricao>
        </div>
        <div>
          <ImgLivro src={img} />
          {/* Ao clicar no botão, chame a função openModal */}
          <Botao onClick={openModal}>Saiba mais</Botao>
        </div>
      </Card>

      {/* Renderize o Modal se estiver aberto */}
      {modalOpen && (
        <Modal
          titulo={titulo}
          descricao={descricaoModal}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default CardRecomenda;
