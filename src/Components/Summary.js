import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'

import { Col } from './Containers.js';
import { Title, Text } from './Text.js';


const ColMid = styled(Col)`
  width: 100%;
  text-align: center;
  justify-content: center; 
  height: 60%;
  @media(max-width: 720px){
    padding-top: 20px;
  }
`;
const Selfie = styled.img`
  align-self: center;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 10px;
`;
const TextBody = styled(Text)`
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
const GET_SUMMERY = gql`
  query{
    text(where: {title: "summery"}){
      title
      text
    }
  }
`

function Summary() {
  const { loading: headShotLoading, error: headShotError, data: headShotData } = useQuery(GET_HEAD_SHOT)
  const { loading: summeryLoading, error: summeryError, data: summeryData } = useQuery(GET_SUMMERY)

  if (headShotLoading) { return <Title>Loading . . . </Title> }
  if (headShotError) { console.log(headShotError) }
  if (summeryLoading) { return <Title>Loading . . . </Title> }
  if (summeryError) { console.log(summeryError) }
  
  return (
    <>
      <ColMid>
        <Selfie src={`${headShotData.image.url}`} />
        <Title>Chester Hansen full stack web development</Title>
        <TextBody>{summeryData.text.text}</TextBody>
      </ColMid>
    </>
  );
}

export default Summary;
