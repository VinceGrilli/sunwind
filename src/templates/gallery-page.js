import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

export const GalleryPageTemplate = ({ title }) => {
  return (
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
              <h2
                className='title is-size-1 has-text-weight-bold is-bold-light has-text-centered'
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #2073af , #3480b6)',
                  height: '4rem',
                  color: 'white',
                }}
              >
                {title}
              </h2>
              {/* <PageContent className='content' content={content} /> */}
              <Gallery />
            
            <div className='columns'>
              <div className='column is-12 has-text-centered'>
                <Link
                  className='has-text-weight-bold is-size-1 has-text-centered'
                  to='/contact'
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#d5ad26',
                    color: 'white',
                    lineHeight: '1',
                    padding: '0.25em',
                    width: '330px',
                    height: '130px',
                    borderStyle: 'solid round',
                    borderColor: 'white',
                    borderRadius: '6px',
                  }}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GalleryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const GalleryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GalleryPageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
