import React from 'react';
import styled from 'styled-components';

import { Col } from './Containers.js';
import { Title, Text } from './Text.js';
import imgLogo from '../imgs/CHDev_logo.png';
import headShot from '../imgs/chester.jpg';


const ColMidR = styled(Col)`
  width: 70%;
  text-align: center;
  justify-content: center;
  height: 60%;
`;
const ColMidL = styled(ColMidR)`
  border-right: solid #4C5454 1px;
  width: 30%;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 50%;
  height: 40%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 55%;
    height: 35%;
  }
  @media (max-width: 600px){
    width: 60%;
    height: 30%;
  }
  @media (max-width: 425px) {
    width: 65%;
    height: 25%;
  }
`;
const Selfie = styled.img`
  align-self: center;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 10px;
`;

function UnderConstruction() {
  return (
    <React.Fragment>
      <ColMidL>
        <Logo src={imgLogo} alt='CHDev Logo' />
      </ColMidL>
      <ColMidR>
        <Selfie src={headShot} />
        <Title>Welcome to Chester E Hansen Development</Title>
        <Text>This page is currently under cunstruction. We are sorry for the inconvience, please come back soon.</Text>
      </ColMidR>
    </React.Fragment>
  );
}

export default UnderConstruction;
