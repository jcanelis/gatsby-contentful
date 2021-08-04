import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const base = 4;

const Wrapper = styled.button`
  margin: 0;
  padding: 0 ${base * 4}px;
  display: inline-block;
  height: ${base * 12}px;
  font-family: "ITC Avant Garde Gothic Medium";
  font-size: 14px;
  line-height: ${base * 12}px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  appearance: button;
  background: ${(props) => props.color || "#000"};
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.07), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 150ms ease;

  &:hover {
    background: "rgba(0,0,0,1)";
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Button = ({ color, func, text }) => (
  <Wrapper color={color} onClick={func}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  func: PropTypes.func,
};

export default Button;
