import React from 'react';
import styled from 'styled-components';

import { Col, Row } from './Containers.js';
import { Title, Text } from './Text.js';
import { Linkedin, Github } from './Logos';
import headShot from '../imgs/chester.jpg';


const ColMid = styled(Col)`
  width: 100%;
  text-align: center;
  justify-content: center; 
  height: 60%;
  margin: 30px;
  @media (max-width: 568px) {
    margin-top: 100px;
  }
`;
const Selfie = styled.img`
  align-self: center;
  width: 275px;
  height: 275px;
  border-radius: 50%;
  margin: 10px;
`;
const SMLogoRow = styled(Row)`
 justify-content: center;
 margin: 10px;
`; 
const MainText = styled(Text)`
  width: 80%;
  align-self: center;
`;

function Summary() {
  return (
      <ColMid>
        <Selfie src={headShot} />
        <Title>Chester Hansen full stack web development</Title>
        <MainText>As a Web Developer I have put my determination and quick learning to the test as I have learned new ways to problem solve. </MainText>
        <MainText>Paired with a keen attention to detail and quality I am prepared to seek out ambitious and innovative solutions to the task at hand.</MainText>
        <SMLogoRow>
          <Github />
          <Linkedin />
        </SMLogoRow>
      </ColMid>
  );
}

export default Summary;
