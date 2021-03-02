import { log } from 'node:console';
import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    header?: string;
};

type StyledProps = {
    bg?: string;
    textColor?: string;
};

const LandingPage: FC<Props> = ({ header }) => {
    const [headerText, setHeaderText] = useState<string>('');

    useEffect(() => {
        if (headerText === '' && header) {
            setHeaderText(header);
        }
    });
    return (
        <StyledContainer bg="">
            <h1>{header}</h1>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    border: solid 1px #f0f;
    background-color: ${(props) => (props.bg ? props.bg : '#a0f')};
    h1 {
        color: blueviolet;
    }
`;

export default LandingPage;
