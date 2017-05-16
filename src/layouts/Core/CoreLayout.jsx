import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Header from 'components/Header';

import 'styles/core.css';

export const CoreLayout = ({ children }) => (
  <div className='core-container'>
    <Header />
    <div className='core-content'>
      {children}
    </div>
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default CoreLayout;
