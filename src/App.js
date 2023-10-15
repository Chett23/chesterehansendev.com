import React, { useState } from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import UnderConstruction from "./Components/UnderConstruction";
import Summary from "./Components/Summary";
import Projects from "./Components/Projects";
import Main from "./Components/Main";

import { MainCont, SideBar, Col, Row } from "./Components/Containers";
import { LinkedinSB, GithubSB, Hamburger, CHDLogo } from "./Components/Logos";

const SBLink = styled(Link)`
  text-decoration: none;
  color: #393e41;
  font-size: 12pt;
  margin: 15px;
  &:hover {
    color: #7aa095;
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
  const [viewSideBar, setViewSideBar] = useState(false);
  return (
    <MainCont onTouchStart={() => setViewSideBar(false)}>
      <SideBar
        onMouseEnter={() => setViewSideBar(!viewSideBar)}
        onMouseLeave={() => setViewSideBar(!viewSideBar)}
      >
        {viewSideBar ? (
          <React.Fragment>
            <NavCol>
              <Link to="/" element={Main}>
                <CHDLogo />
              </Link>
              <SBLink to="/summary" element={Summary}>
                About
              </SBLink>
              <SBLink to="/projects" element={Projects}>
                Projects
              </SBLink>
            </NavCol>
            <LogoRow>
              <GithubSB />
              <LinkedinSB />
            </LogoRow>
          </React.Fragment>
        ) : (
          <Hamburger
            onTouchStart={() => setViewSideBar(!viewSideBar)}
            onBlur={() => setViewSideBar(!viewSideBar)}
          />
        )}
      </SideBar>
      <Routes>
        {/* <Route exact path='/' element={<Main/>} /> */}
        <Route path="/summary" element={<Summary />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<UnderConstruction />} />
      </Routes>
    </MainCont>
  );
}

export default App;
