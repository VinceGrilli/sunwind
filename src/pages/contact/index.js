import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h2
                className='title is-size-1 has-text-weight-bold is-bold-light has-text-centered'
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #2073af , #3480b6)',
                  height: '4rem',
                  color: 'white',
                }}
              >
                Contact Us
              </h2>
              <div style={{ textAlign: 'center' }}>
                <h3>
                  Call or Email anytime or fill out the contact form below
                </h3>
                <h4>
                  Phone: <a href='tel:508-258-7277'>508-258-7277</a>
                </h4>
                <h4>
                  Email:{' '}
                  <a href='mailto:info@sunwindllc.com'>Info@Sunwindllc.com</a>
                </h4>
              </div>
              <form
                name='contact'
                method='post'
                action='/contact/thanks/'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type='hidden' name='form-name' value='contact' />
                <input type='hidden' name='subject' value='New contact form submission' />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name='bot-field' onChange={this.handleChange} />
                  </label>
                </div>
                <div className='field'>
                  <label className='label' htmlFor={'name'}>
                    Your name
                  </label>
                  <div className='control'>
                    <input
                      className='input'
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label' htmlFor={'email'}>
                    Email
                  </label>
                  <div className='control'>
                    <input
                      className='input'
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label' htmlFor={'message'}>
                    Message
                  </label>
                  <div className='control'>
                    <textarea
                      className='textarea'
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='field'>
                  <button className='button is-link' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
