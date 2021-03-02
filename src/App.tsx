import React from 'react';
import './App.css';
import styled from 'styled-components';
import { LandingPage } from './LandingPage';

function App() {
    return (
        <StyledContainer className="App">
            <LandingPage header={'LANDING'} />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: 20px auto;
    max-width: 1200px;
    width: 100%;
`;

export default App;
