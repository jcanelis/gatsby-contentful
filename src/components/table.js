import * as React from "react";
import styled from "styled-components";
import users from "../other/users";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageWrapper from "../components/imagewrapper";
// Hooks
import { getProducts } from "../hooks/products";

const TableWrapper = styled.table`
  font-family: "Leitura Roman";
  font-size: 20px;
  line-height: ${4 * 8}px;
  border-collapse: collapse; /* what this?*/
  width: 100%;
  overflow-x: auto;
`;

const Header = styled.th`
  font-family: "Leitura Roman";
  font-size: 18px;
  line-height: ${4 * 8}px;
  text-align: left;
  padding: 16px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-family: system-ui;
  font-weight: 500;
  border-top: none;
`;

const Data = styled.td`
  font-family: "Fira Mono Regular";
  font-size: 18px;
  line-height: ${4 * 6}px;
  text-align: left;
  padding: 16px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  &.label {
    font-family: system-ui;
    font-weight: 500;
    border-top: none;
  }
`;

const Row = styled.tr`
  font-family: "Leitura Roman";
  font-size: 20px;
  line-height: ${4 * 8}px;
  text-align: left;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Table = () => {
  const products = getProducts();

  return (
    <TableWrapper>
      <thead>
        <Row>
          <Header>Photo</Header>
          <Header>Job</Header>
          <Header>Age</Header>
          <Header>Location</Header>
        </Row>
      </thead>

      <tbody>
        {products.map(({ node }) => {
          const image = getImage(node.photos[0]);
          return (
            <Row key={node.id}>
              <Data style={{ display: "flex" }}>
                <ImageWrapper>
                  <GatsbyImage
                    image={image}
                    alt={node.description.description}
                  />
                </ImageWrapper>
              </Data>
              <Data>{node.title}</Data>
              <Data>{node.price}</Data>
              <Data>{node.description.description}</Data>
            </Row>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
