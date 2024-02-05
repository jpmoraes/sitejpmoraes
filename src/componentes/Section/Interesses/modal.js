import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
`;

const ModalTitle = styled.h2`
  color: #333;
`;

const ModalDescription = styled.p`
  color: #555;
`;

const CloseButton = styled.button`
  background: #c2b990;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const Modal = ({ titulo, descricao, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{titulo}</ModalTitle>
        <ModalDescription>{descricao}</ModalDescription>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
