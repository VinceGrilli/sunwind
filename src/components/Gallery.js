import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const Gallery = () => {
  const imageData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: "gallery-display" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  console.log(imageData.allFile.nodes);
  return (
    <div className='gallery-grid'>
      {imageData.allFile.nodes.map((img) => (
        <GatsbyImage fluid={img.childImageSharp.fluid} />
      ))}
    </div>
  );
};

export default Gallery;
