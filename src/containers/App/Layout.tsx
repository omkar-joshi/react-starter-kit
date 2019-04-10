import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
