import styled from "styled-components";

const Layout = styled.main`
  margin: 48px auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(12, auto);
  grid-gap: 24px;
  width: 1120px;

  @media (max-width: 1200px) {
    margin: 0;
    width: 100%;
    padding: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }
`;

export default Layout;
