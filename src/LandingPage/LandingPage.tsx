import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListItemDots } from './components/index';

type Props = {
    header?: string;
};

type StyledProps = {
    bg?: string;
    textColor?: string;
    h1TextColor?: string;
};

const LandingPage: FC<Props> = ({ header }) => {
    const [headerText] = useState<string>('');

    useEffect(() => {
        if (headerText === '' && header) {
            // setHeaderText(header);
        }
    });
    return (
        <StyledContainer bg="">
            <ListItemDots />
            <StyledDot
                onClick={() => {
                    console.log('CLICKERS');
                }}
            ></StyledDot>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    height: 60vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledDot = styled.button<StyledProps>`
    outline: none;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: solid 0px #555;
    border-radius: 500px;
    &:active {
        width: 130px;
        height: 130px;
        background-color: #f0f;
    }
    &:hover {
        width: 126px;
        height: 126px;
        border: solid 2px #b0b;
    }
`;

export default LandingPage;
