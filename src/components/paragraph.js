import styled from "styled-components";
import PropTypes from "prop-types";

const Paragraph = styled.p`
  grid-column: 1 / 9;
  grid-row: ${(props) => props.row};
  line-height: 150%;
  font-weight: 400;
  width: 100%;
  color: rgba(100, 100, 100, 1);

  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.9);
  }
`;

Paragraph.propTypes = {
  row: PropTypes.number,
};

export default Paragraph;
