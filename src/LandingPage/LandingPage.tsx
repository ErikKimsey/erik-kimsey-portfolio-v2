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
            <StyledDot></StyledDot>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    /* background-color: ${(props) => (props.bg ? props.bg : '#a0f')}; */
    height: 60vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #f0f; */
`;

const StyledDot = styled.button<StyledProps>`
    outline: none;
    width: 120px;
    height: 120px;
    background-color: #fff;
    text-align: center;
    border: solid 0px #555;
    border-radius: 500px;
    &:active {
        outline: none;
        width: 126px;
        height: 126px;
    }
    @media (min-width: 1080px) {
        width: 300px;
        height: 300px;
        &:active {
            width: 310px;
            height: 310px;
        }
    }
`;

export default LandingPage;
