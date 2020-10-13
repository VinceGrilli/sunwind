import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

import logo from '../img/sunwind-logo.png';
import icon1 from '../img/icon-1.png';
import icon2 from '../img/icon-2.png';
import icon3 from '../img/icon-3.png';
import wave from '../img/wave.png';

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  mainpitch,
}) => (
  <div style={{ backgroundColor: '#3480b6' }}>
    <div
      className='full-width-image margin-top-0'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
      }}
    >
      <div
        className='container'
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <div className='content has-text-centered'>
          <img
            src={logo}
            alt='Sunwind LLC'
            style={{ height: '10em', margin: '1rem .1rem' }}
          />
        </div>
        <h1
          className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered'
          style={{
            backgroundImage: 'linear-gradient(to right, #2073af , #3480b6)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            opacity: '.85',
            borderRadius: '6px',
          }}
        >
          {heading}
        </h1>
        <hr />
        <div className='columns is-centered'>
          <div className='column is-12 has-text-centered'>
            <Link
              className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered'
              to='/contact'
              style={{
                display: 'inline-block',
                backgroundColor: '#185581',
                color: '#f4d675',
                lineHeight: '1',
                padding: '0.25em',
                width: '300px',
                borderStyle: 'solid round',
                borderColor: 'white',
                borderRadius: '6px',
              }}
            >
              {subheading}
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div
        className='content columns'
        style={{
          backgroundImage: 'linear-gradient(to right, #2073af , #3480b6)',
          borderRadius: '6px',
          marginBottom: '1rem',
        }}
      >
        <div className='tile column is-two-fifths '>
          <h2
            className=''
            style={{ textAlign: 'left', marginLeft: '1em', color: 'white' }}
          >
            {mainpitch.title}
          </h2>
        </div>
        <div className='column is-one-fifth is-narrow'></div>
        <div className='tile column is-two-fifths '>
          <h2
            className=''
            style={{
              textAlign: 'right',
              marginRight: '1em',
              color: 'white',
              display: 'flow-root',
            }}
          >
            {mainpitch.description}
          </h2>
        </div>
      </div>
    </div>
    <div className='container' style={{ backgroundColor: '#3480b6' }}>
      <div className='content columns '>
        <div
          className='column is-two-fifths'
          style={{
            marginLeft: '1rem',
            fontSize: '1.2rem',
            color: 'white',
            textAlign: 'left',
          }}
        >
          <p>
            SunWind, LLC. is dedicated to providing professional design and
            installation of alternative energy systems. Our purpose is to
            provide our clients with innovative solutions to their alternative
            energy needs while promoting the economical and environmental
            benefits.
          </p>
          <p >
            SunWind, LLC. will provide turnkey installations of solar power,
            Wind power, and Solar Thermal systems. We will conduct an extensive
            site assessment of each project and provide a written report to the
            client with our proposal.
          </p>
        </div>
        <div className='column is-one-fifth'></div>
        <div
          className='column is-two-fifths'
          style={{
            fontSize: '1.5rem',
            color: '#d5ad26',
            textAlign: 'right',
          }}
        >
          <p style={{
            marginRight: '1rem',}}>
            “My wife and I are writing to express our satisfaction with a 22
            panel solar (electricity) installation by SunWind LLC. We researched
            locally for Cape-based solar companies to do the work and
            installation. The 3 bids were competitive, but we chose Tim Holmes’s
            SunWind based on his knowledge ...”
          </p>
          <p style={{ color: '#f4d675', marginRight: '1rem', }}>- Todd and Robin L. (Sandwich, MA)</p>
        </div>
      </div>
    </div>
    <div className='columns'>
      <div
        className='column is-12 has-text-centered'
        style={{ padding: '2rem ' }}
      >
        <Link className='btn' to='/blog'>
          Read more
        </Link>
      </div>
    </div>
    <div className='columns'>
      <div
        className='column is-12 has-text-centered'
        style={{ padding: '4rem ', backgroundColor: 'white' }}
      >
        <img src={wave} alt='wave' />
      </div>
    </div>
    <div className='columns' style={{ backgroundColor: 'white' }}>
      <Link className='column content has-text-centered' to='/about'>
        <img src={icon1} alt='Installation Options' />
        <h1 style={{ color: '#d5ad26', fontWeight: '300' }}>
          Installation Options
        </h1>
        <h4 style={{ color: '#d5ad26' }}>Roof mounted or ground array...</h4>
      </Link>
      <Link className='column content has-text-centered' to='/payment-options'>
        <img src={icon2} alt='Installation Options' />
        <h1 style={{ color: '#d5ad26', fontWeight: '300' }}>Payment Options</h1>
        <h4 style={{ color: '#d5ad26' }}>Pay in full verses financing...</h4>
      </Link>
      <Link className='column content has-text-centered' to='/wind'>
        <img src={icon3} alt='Installation Options' />
        <h1 style={{ color: '#d5ad26', fontWeight: '300' }}>Wind Power</h1>
        <h4 style={{ color: '#d5ad26' }}>
          Learn about wind turbine options...
        </h4>
      </Link>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
