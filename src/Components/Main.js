import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'

import { Col, Row } from './Containers.js';
import { Title, Text } from './Text.js';
import { Linkedin, Github, Email } from './Logos';


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
  max-width: 780px;
  align-self: center;
`;

const GET_HEAD_SHOT = gql`
  query {
    image(where: {title: "headShot"}){
      title
      id
      url
    }
  }
`
const GET_MAIN_SUMMERY = gql`
  query{
    text(where: {title: "Main Summery"}){
      text
    }
  }
`

function Summary() {
  const { loading: headShotLoading, error: headShotError, data: headShotData } = useQuery(GET_HEAD_SHOT)
  const { loading: mainSummeryLoading, error: mainSummeryError, data: mainSummeryData } = useQuery(GET_MAIN_SUMMERY)

  if (headShotLoading) {return <Title>Loading . . . </Title>}
  if (headShotError) { console.log(headShotError) }
  if (mainSummeryLoading) {return <Title>Loading . . . </Title>}
  if (mainSummeryError) { console.log(mainSummeryError) }

  return (
    <ColMid>
      <Selfie src={`${headShotData.image.url}`} />
      <Title>Chester Hansen full stack web development</Title>
      <MainText>{mainSummeryData.text.text}</MainText>
      <SMLogoRow>
        <Github />
        <Linkedin />
        <Email />
      </SMLogoRow>
    </ColMid>
  );
}

export default Summary;
