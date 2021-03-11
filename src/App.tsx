import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { LandingPage } from './LandingPage/components';
import PortfolioPage from './Portfolio/PortfolioPage';
import HeaderComponent from './Header/Header';

function App() {
    return (
        <Router>
            <StyledContainer className="App">
                <HeaderComponent name="Erik Kimsey" title="UX Engineer" />
                {/* <ul>
                    <Link to="/portfolio">PORT YOYOYO</Link>
                </ul> */}
                <Switch>
                    <Route path="/portfolio">
                        <PortfolioPage />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </StyledContainer>
        </Router>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    height: 95vh;
    max-width: 1200px;
    width: 100%;
    @media (min-width: 300px) {
        height: 95vh;
        width: ${window.innerWidth - 10}px;
    }
    @media (min-width: 500px) {
        height: ${() => window.innerHeight}px;
        width: 95vw;
    }
    @media (min-width: 700px) {
        height: 95vh;
        width: 95vw;
    }
    @media (min-width: 1020px) {
        height: 95vh;
        width: 95vw;
    }
`;

export default App;
