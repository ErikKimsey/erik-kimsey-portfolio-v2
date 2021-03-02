import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    header?: string;
};

const LandingPage: FC<Props> = ({ header }) => {
    const [headerText, setHeaderText] = useState<string>('');

    useEffect(() => {
        if (headerText === '' && header) {
            setHeaderText(header);
        }
    });
    return (
        <StyledContainer>
            <h1>{header}</h1>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    border: solid 1px #f0f;
    h1 {
        color: blueviolet;
    }
`;

export default LandingPage;
