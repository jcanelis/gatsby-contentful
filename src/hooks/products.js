import { useStaticQuery, graphql } from "gatsby";

export const getProducts = () => {
  const data = useStaticQuery(
    graphql`
      query getContentfulData {
        allContentfulProduct {
          edges {
            node {
              id
              title
              price
              photos {
                contentful_id
                description
                gatsbyImageData
              }
              description {
                description
              }
            }
          }
        }
      }
    `
  );

  return data.allContentfulProduct.edges;
};
