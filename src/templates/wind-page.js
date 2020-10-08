import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const WindPageTemplate = ({
  title,
  content,
  image,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
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
              <div
                className='full-width-image-container'
                style={{
                  backgroundImage: `url(${
                    !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  })`,
                  backgroundSize: `auto`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></div>
              <PageContent className='content' content={content} />
            </div>
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

WindPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const WindPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WindPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

WindPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WindPage;

export const windPageQuery = graphql`
  query WindPage($id: String!) {
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
