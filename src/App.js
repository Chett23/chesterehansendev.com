import React from 'react';
import styled from 'styled-components';

import { MainCont, Col } from './Components/Containers.js';
import { Title, Text } from './Components/Text.js';
import imgLogo from './imgs/CHDev_logo.jpg';


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

function App() {
  return (
    <MainCont>
      <ColMidL>
        <Logo src={imgLogo} alt='CHDev Logo' />
      </ColMidL>
      <ColMidR>
        <Title>Welcome to Chester E Hansen Development</Title>
        <Text>This page is currently under cunstruction. We are sorry for the inconvience, please come back soon.</Text>
      </ColMidR>
    </MainCont>
  );
}

export default App;
