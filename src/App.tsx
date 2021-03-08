import React from 'react';
import './App.css';
import styled from 'styled-components';
import { LandingPage } from './LandingPage';
import HeaderComponent from './Header/Header';

function App() {
    return (
        <StyledContainer className="App">
            <HeaderComponent name="Erik Kimsey" title="UX Engineer" />
            <LandingPage header={'LANDING'} />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    height: ${() => window.innerHeight - 100}px;
    margin: 0px auto;
    margin-top: 10px;
    max-width: 1200px;
    width: 100%;
    @media (min-width: 300px) {
        height: 95vh;
        width: ${window.innerWidth - 10}px;
    }
    @media (min-width: 500px) {
        height: ${() => window.innerHeight}px;
    }
    @media (min-width: 700px) {
        height: 95vh;
        width: 95vw;
    }
    @media (min-width: 1020px) {
        border: solid 1px #aaa;
        height: 95vh;
        width: 95vw;
    }
`;

export default App;
