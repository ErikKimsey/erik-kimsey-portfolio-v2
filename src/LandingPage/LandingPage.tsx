import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuItemList } from './components/index';

type Props = {
    header?: string;
};

type StyledProps = {
    bg?: string;
    textColor?: string;
    h1TextColor?: string;
};

const LandingPage: FC<Props> = ({}) => {
    const [dotActive, setDotActive] = useState<boolean>();

    useEffect(() => {
        if (dotActive === undefined || dotActive === true) setDotActive(false);
    }, []);

    const handleDotPress = () => {
        setDotActive(!dotActive);
    };

    return (
        <StyledContainer bg="">
            {dotActive === true && <MenuItemList dotActive={dotActive} />}
            <StyledDot
                onClick={() => {
                    handleDotPress();
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
        width: 126px;
        height: 126px;
        background-color: #000;
        border: solid 2px #fff;
    }
    &:hover {
        background-color: #000;
        border: solid 2px #fff;
    }
    @media (min-width: 1020px) {
        &:hover {
            width: 126px;
            height: 126px;
            background-color: #000;
            /* background-color: #202; */
        }
        &:active {
            width: 126px;
            height: 126px;
            background-color: #000;
            border: solid 2px #fff;
        }
    }
`;

export default LandingPage;
