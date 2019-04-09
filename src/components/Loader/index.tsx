import React from 'react';
import { Spinner, SpinnerProps } from 'react-bootstrap';

import './style.scss';

const Loader: React.SFC<SpinnerProps> = ({ animation }) => (
  <div className="loader">
    <Spinner animation={animation} />
  </div>
);

export default Loader;
