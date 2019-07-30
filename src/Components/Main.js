import React from 'react';
import styled from 'styled-components';

import { Col } from './Containers.js';
import { Title, Text } from './Text.js';
import headShot from '../imgs/chester.jpg';


const ColMid= styled(Col)`
  width: 100%;
  text-align: center;
  justify-content: center; 
  height: 60%;
`;
const Selfie = styled.img`
  align-self: center;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 10px;
`;

function Summary() {
  return (
    <React.Fragment>
      <ColMid>
        <Selfie src={headShot} />
        <Title>Chester Hansen full stack web development</Title>
        <Text>About About About About About About About About About About About About About About About About About About About About About About</Text>
        <Text>About About About About About About About About About About About About About About About About About About About About About About</Text>
        </ColMid>
    </React.Fragment>
  );
}

export default Summary;
