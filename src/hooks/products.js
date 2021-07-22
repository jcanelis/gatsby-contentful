import { useStaticQuery, graphql } from "gatsby";

export const getProducts = () => {
  const data = useStaticQuery(
    graphql`
      query getContentfulDatass {
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
              mainPhoto {
                gatsbyImageData(
                  formats: JPG
                  quality: 10
                  placeholder: DOMINANT_COLOR
                )
                contentful_id
              }
            }
          }
        }
      }
    `
  );

  return data.allContentfulProduct.edges;
};
