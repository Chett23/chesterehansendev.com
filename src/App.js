import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';

import UnderConstruction from './Components/UnderConstruction';
import Summary from './Components/Summary';
import Projects from './Components/Projects';
import Main from './Components/Main';


import { MainCont, SideBar, Col, Row } from './Components/Containers';
import { LinkedinSB, GithubSB, Hamburger, CHDLogo } from './Components/Logos';

const SBLink = styled(Link)`
  text-decoration: none;
  color: #393E41;
  font-size: 12pt;
  margin: 15px;
  &:hover {
    color: #7AA095;
  }
`;
const NavCol = styled(Col)`
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  @media (max-width: 568px) {
    flex-direction: row;
  }
`;
const LogoRow = styled(Row)`
  padding: 0;
  margin: 15px;
`;



function App() {
  const [viewSideBar, setViewSideBar] = useState(false)
  return (
    <MainCont onTouchStart={()=> setViewSideBar(false)}>
      <SideBar  onMouseEnter={() => setViewSideBar(!viewSideBar)} onMouseLeave={() => setViewSideBar(!viewSideBar)} >
        {
          viewSideBar ?
            <React.Fragment>
              <NavCol>
                <Link to='/' component={Main}><CHDLogo /></Link>
                <SBLink to='/summary' component={Summary}>About</SBLink>
                <SBLink to='/projects' component={Projects}>Projects</SBLink>
              </NavCol>
              <LogoRow>
                <GithubSB />
                <LinkedinSB />
              </LogoRow>
            </React.Fragment>
            :
            <Hamburger onTouchStart={()=> setViewSideBar(!viewSideBar)} onBlur={()=> setViewSideBar(!viewSideBar)}/>
        }
      </SideBar>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/summary' component={Summary} />
        <Route path='/projects' component={Projects} />
        <Route path='/under-construction' component={UnderConstruction} />
      </Switch>
    </MainCont>
  )
}

export default App;