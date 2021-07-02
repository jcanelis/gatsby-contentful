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
import Map from "../components/map";
import { mapData } from "../components/data";

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
        <div style={{ gridRow: "1", gridColumn: "1/9" }}>
          <Map data={mapData} />
        </div>

        <div style={{ gridRow: "2", gridColumn: "1/9" }}>
          <ul>
            {products.map(({ node }) => {
              const image = getImage(node.photos[0]);
              return (
                <li key={node.id}>
                  <Header>{node.title}</Header>
                  <Subheader>{node.price}</Subheader>
                  <ImageWrapper>
                    <GatsbyImage
                      image={image}
                      alt={node.description.description}
                    />
                  </ImageWrapper>
                  <Paragraph>{node.description.description}</Paragraph>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
