import styled from "styled-components";

const Subheader = styled.h4`
  grid-column: 1 / 9;
  grid-row: ${(props) => props.row};
  font-size: 44px;
  line-height: 140%;
  font-weight: 700;

  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.9);
  }
`;

export default Subheader;
