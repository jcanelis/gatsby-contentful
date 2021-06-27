import styled from "styled-components";
import PropTypes from "prop-types";

const Paragraph = styled.p`
  font-weight: 400;
  line-height: 150%;
  color: rgba(100, 100, 100, 1);

  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.85);
  }
`;

Paragraph.propTypes = {
  row: PropTypes.number,
};

export default Paragraph;
