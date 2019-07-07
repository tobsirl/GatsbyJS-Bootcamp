import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/index.scss';

const Layout = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
