import React from 'react';
import panels from '../../../static/img/ground-panels4.jpg';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const BlogIndexPage = () => {
  return (
    <Layout>
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
                Latest Stories
              </h2>
              <div
                className='full-width-image-container'
                style={{
                  backgroundImage: `url(${panels})`,
                  backgroundSize: `auto`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='content'>
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
