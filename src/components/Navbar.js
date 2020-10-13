import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/sunwind-logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

const Navbar = () => {
  let [active, setActive] = useState(false);
  let [navBarActiveClass, SetNavBarActiveClass] = useState('');

  const toggleActive = () => {
    setActive(!active);
    active ? SetNavBarActiveClass('is-active') : SetNavBarActiveClass('');
  };

  return (
    <nav
      className='navbar '
      role='navigation'
      aria-label='main-navigation '
      style={{
        backgroundImage: 'linear-gradient(to right, #2073af , #3480b6)',
      }}
    >
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item' title='Logo'>
            <img src={logo} alt='Sunwind' style={{ width: '88px' }} />
          </Link>
          {/* Hamburger menu */}
          {/* eslint-disable-next-line */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target='navMenu'
            onClick={(e) => toggleActive(e.target.value)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id='navMenu'
          className={`navbar-menu ${navBarActiveClass}`}
          style={{
            backgroundImage: 'linear-gradient(to right, #2073af , #3480b6)',
          }}
        >
          <div className='navbar-start has-text-centered'>
            <div className={`navbar-item has-dropdown is-hoverable `}>
              <Link className='navbar-link wt' to='/residential-commercial'>
                Solar
              </Link>

              <div className={`navbar-dropdown`}>
                <Link className='navbar-item wt' to='/residential-commercial'>
                  Residential & Commercial
                </Link>
                <Link className='navbar-item wt' to='/incentive-programs'>
                  Incentive Programs
                </Link>
                <Link className='navbar-item wt' to='/payment-options'>
                  Payment Options
                </Link>
                <Link className='navbar-item wt' to='/ground'>
                  Ground-mount Systems
                </Link>
              </div>
            </div>
            <Link className='navbar-item wt' to='/wind'>
              Wind
            </Link>
            <Link className='navbar-item wt' to='/energy-storage'>
              Energy Storage
            </Link>
            <Link className='navbar-item wt' to='/gallery'>
              Gallery
            </Link>
            <Link className='navbar-item wt' to='/about'>
              About
            </Link>
            <Link className='navbar-item wt' to='/blog'>
              Blog
            </Link>
            <Link className='navbar-item wt' to='/contact'>
              Contact
            </Link>
          </div>
          <div className='navbar-end has-text-centered'>
            <div className='social'>
              <a
                title='facebook'
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/sunwindllc/'
              >
                <img
                  src={facebook}
                  alt='Facebook'
                  style={{ width: '1.25rem' }}
                />
              </a>
              <a
                title='instagram'
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/sunwindllc/'
              >
                <img
                  src={instagram}
                  alt='Instagram'
                  style={{ width: '1.25rem' }}
                />
              </a>
            </div>
            <a className='navbar-item wt' href='tel:508-258-7277"'>
              508-258-7277
            </a>            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
