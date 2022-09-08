import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/sunwind-logo.png';
import btclogo from '../img/btc-logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer '>
        <div className='content has-text-centered'>
          <img
            src={logo}
            alt='Sunwind LLC'
            style={{ height: '10em', margin: '1rem .2rem' }}
          />
        </div>
        <div
          className='content has-text-centered has-text-white-ter'
          style={{
            backgroundImage: 'linear-gradient(to right, #2073af , #3480b6)',
          }}
        >
          <div className='container has-text-white-ter'>
            <div style={{ maxWidth: '100vw' }} className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item wt'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/gallery'>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/about'>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/wind'>
                        Wind
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      <Link
                        className='navbar-item wt'
                        to='/residential-commercial'
                      >
                        Residential & Commercial Solar
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/energy-storage'>
                        Energy Storage
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/incentive-programs'>
                        Incentive Programs
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/payment-options'>
                        Payment Options
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item wt' to='/ground'>
                        Ground-mount Systems
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <ul className='menu-list' style={{ marginRight: '2rem' }}>
                  <li>
                    <Link
                      className='navbar-item wt'
                      to='/contact'
                      style={{ textAlign: 'center' }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      className='navbar-item wt'
                      href='tel:508-258-7277"'
                      style={{ textAlign: 'center', paddingBottom: '0' }}
                    >
                      508-258-7277
                    </a>
                  </li>
                  <li>
                    <a
                      className='navbar-item wt'
                      href='mailto:info@sunwindllc.com'
                      style={{ textAlign: 'center', paddingBottom: '0' }}
                    >
                      Info@SunwindLLC.com
                    </a>
                  </li>
                </ul>
                <div className='social' style={{ paddingTop: '0' }}>
                  <a title='facebook' href='https://facebook.com'>
                    <img
                      src={facebook}
                      alt='Facebook'
                      style={{
                        width: '1em',
                        height: '1em',
                      }}
                    />
                  </a>

                  <a title='instagram' href='https://instagram.com'>
                    <img
                      src={instagram}
                      alt='Instagram'
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
                <p>
                  © Copyright {new Date().getFullYear()} All rights reserved.
                  Website crafted by:
                  {` `}
                  <a href='https://builttocode.dev'>
                    <img
                      style={{
                        maxWidth: `7rem`,
                      }}
                      src={btclogo}
                      alt='Built to Code'
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
