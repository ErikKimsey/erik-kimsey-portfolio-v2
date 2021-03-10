import React from 'react';
import './App.css';
import styled from 'styled-components';
import { LandingPage } from './LandingPage';
import HeaderComponent from './Header/Header';

function App() {
    return (
        <StyledContainer className="App">
            <HeaderComponent name="Erik Kimsey" title="UX Engineer" />
            <LandingPage header={''} />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    /* margin-top: 10px; */
    height: 95vh;
    max-width: 1200px;
    width: 100%;
    /* background-color: #f0f; */
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
