import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";

// Components
import GlobalStyle from "../components/style";
import Header from "../components/header";
import ImageWrapper from "../components/imagewrapper";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import Subheader from "../components/subheader";

// Hooks
import { getProducts } from "../hooks/products";

const IndexPage = () => {
  const products = getProducts();
  return (
    <>
      <Helmet
        title={"Gatsby + Contentful"}
        meta={[
          {
            name: "charset",
            content: "UTF-8",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "description",
            content: "Gatsby site with Contentful content.",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyle />
      <Helmet title={"Gatsby + Contentful"} />
      <Layout>
        <ul style={{ flexWrap: "wrap" }}>
          {products.map(({ node }) => {
            const image = getImage(node.photos[0]);
            return (
              <li key={node.id}>
                <Header>{node.title}</Header>
                <Subheader row={2}>{node.price}</Subheader>
                <ImageWrapper>
                  <GatsbyImage
                    image={image}
                    alt={node.description.description}
                  />
                </ImageWrapper>
                <Paragraph row={4}>{node.description.description}</Paragraph>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default IndexPage;
