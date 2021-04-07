import React, { FC, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import MenuDotItem from './MenuDotItem';
import { DOT_DATA } from '../data/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// const DOT_DATA = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

type Props = {
    title?: string;
    dotActive?: boolean;
};

type StyledProps = {
    color?: string;
};

const ListItemDots: FC<Props> = (props) => {
    const [dotActive, setDotActive] = useState<boolean>();

    useEffect(() => {
        if (dotActive === undefined || dotActive === true) setDotActive(false);
    }, []);

    const handleDotPress = () => {
        setDotActive(!dotActive);
    };
    const [arrLength, setArrLength] = useState<number>(DOT_DATA.length);
    const [dotAngle, setDotAngle] = useState<number>(0);

    useEffect(() => {
        if (arrLength === undefined || arrLength <= 0) {
            setArrLength(DOT_DATA.length);
        }
        calcAngleBwDots();
        console.log('DOT active in ListITems', dotActive);
    }, []);

    const calcAngleBwDots = () => {
        if (arrLength) {
            setDotAngle(360 / arrLength);
        }
    };

    return (
        <>
            <StyledDot
                onClick={() => {
                    handleDotPress();
                }}
            >
                <FontAwesomeIcon icon={faBars} size="5x" style={{ color: '#FF99FE' }} />
            </StyledDot>
            {dotActive && (
                <StyledContainer>
                    {DOT_DATA.map((e, i) => {
                        return (
                            <MenuDotItem
                                dotContent={e}
                                dotIndex={i}
                                dotAngle={i * dotAngle}
                                dotLength={arrLength}
                                key={i}
                                linkURI="portfolio"
                            />
                        );
                    })}
                </StyledContainer>
            )}
        </>
    );
};

const scaleSmoothly = keyframes`
  from {
    transform: scale(1.0);
  }

  to {
    transform: scale(1.2);
  }
`;

const StyledContainer = styled.div<StyledProps>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

const StyledDot = styled.button<StyledProps>`
    outline: none;
    width: 120px;
    height: 120px;
    border: solid 0px #fff;
    border-radius: 500px;
    background-color: #000;
    &:active {
        width: 130px;
        height: 130px;
        background-color: #000;
    }
    &:hover {
        transform: scale(1.2);
        color: #fff;
        animation: ${scaleSmoothly} 300ms ease-in-out;
        border: solid 2px #aaa;
    }
    @media (min-width: 1020px) {
        &:hover {
            width: 130px;
            height: 130px;
            background-color: #000;
            /* background-color: #202; */
        }
        &:active {
            width: 130px;
            height: 130px;
            background-color: #000;
        }
    }
`;

export default ListItemDots;
