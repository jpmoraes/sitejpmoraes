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
  margin-bottom: 2px;
  background-color: #7e7e7e;
  padding: 0px;
`;

export const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;
