import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 0 0 ${4 * 16}px;
  width: ${4 * 80}px;
  height: ${4 * 80}px;
  display: flex;
  transform: scale(1);
  opacity: 1;
  transition: ease 0.2s all;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2.8px 2.2px,
    rgba(0, 0, 0, 0.027) 0px 6.7px 5.3px, rgba(0, 0, 0, 0.035) 0px 12.5px 10px,
    rgba(0, 0, 0, 0.043) 0px 22.3px 17.9px,
    rgba(0, 0, 0, 0.05) 0px 41.8px 33.4px, rgba(0, 0, 0, 0.07) 0px 100px 80px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 100%;
    height: ${4 * 120}px;

    &:hover {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.9;
  }
`;

export default ImageWrapper;
