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
  background-color: #E8E8E8;
  color: #4C5454;
  font-family: arial;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

export const SideBar = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  wrap: wrap;
  align-items: center;
  width: 75px;
  height: 100%;
  border-right: solid #4C5454 1px;
`;