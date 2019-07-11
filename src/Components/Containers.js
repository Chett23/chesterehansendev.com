import styled from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainCont = styled(Row)`
  background-color: #FFFFFF;
  color: #4C5454;
  align-items: center;
  width: 100%;
  height: 100vh;
`;