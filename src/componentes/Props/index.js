import styled from "styled-components";

export const Titulo = styled.h2`
  color: ${(props) => props.cor || "#fff"};
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

export const SectionContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
`;

export const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
