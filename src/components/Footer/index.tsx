import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

import './style.scss';

const Footer: React.SFC = () => {
  return (
    <footer className="footer bg-light">
      <Container fluid className="text-black-50">
        <FontAwesomeIcon icon="copyright" /> Copyright 2019 Velotio Technologies Pvt. Ltd. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
