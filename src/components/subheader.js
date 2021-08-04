import styled from "styled-components";

const Subheader = styled.h4`
  font-size: 56px;
  font-family: "Leitura Display Roman";
  line-height: 300%;
  color: rgba(0, 0, 0, 1);

  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.9);
  }
`;

export default Subheader;
