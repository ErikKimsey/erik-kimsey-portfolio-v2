import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuDotItem from './MenuDotItem';

const MOCKARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

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
    const [arrLength, setArrLength] = useState<number>(MOCKARRAY.length);
    const [dotAngle, setDotAngle] = useState<number>(0);

    useEffect(() => {
        if (arrLength === undefined || arrLength <= 0) {
            setArrLength(MOCKARRAY.length);
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
            ></StyledDot>
            {dotActive && (
                <StyledContainer>
                    {MOCKARRAY.map((e, i) => {
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

const StyledContainer = styled.div<StyledProps>`
    position: absolute;
    display: flex;
    flex-direction: row;
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

export default ListItemDots;
