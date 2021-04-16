import styled from "styled-components";

const Header = styled.header`
  grid-column: 1 / 9;
  grid-row: 1;
  font-size: 24px;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.9);
  }
`;

export default Header;
