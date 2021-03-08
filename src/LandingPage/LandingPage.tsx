import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    header?: string;
};

type StyledProps = {
    bg?: string;
    textColor?: string;
    h1TextColor?: string;
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
            <StyledH1 h1TextColor="">{header}</StyledH1>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    /* background-color: ${(props) => (props.bg ? props.bg : '#a0f')}; */
`;

const StyledH1 = styled.h1<StyledProps>`
    color: ${(props) => (props.h1TextColor ? props.h1TextColor : 'black')};
    text-align: center;
`;

export default LandingPage;
