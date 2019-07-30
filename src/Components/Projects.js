import React from 'react';
import styled from 'styled-components';

import { Col } from './Containers.js';
import shopv1 from '../imgs/shop_v1.jpg';
import shopv2 from '../imgs/shop_v2.jpg';


const ColMid= styled(Col)`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center; 
`;
const Iframe = styled.img`
  width: 300px;
  height: 200px;
`;

function Projects() {
  return (
    <React.Fragment>
      <ColMid>
      <Iframe src={shopv1} />
      <Iframe src={shopv2} />
      </ColMid>
    </React.Fragment>
  );
}

export default Projects;
