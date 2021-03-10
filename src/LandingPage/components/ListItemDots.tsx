import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListDot } from './index';

const MOCKARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

type Props = {
    title?: string;
};

type StyledProps = {
    color?: string;
};

const ListItemDots: FC<Props> = (props) => {
    const {} = props;
    const [arrLength, setArrLength] = useState<number>(MOCKARRAY.length);
    const [dotAngle, setDotAngle] = useState<number>(0);

    useEffect(() => {
        if (arrLength === undefined || arrLength <= 0) {
            setArrLength(MOCKARRAY.length);
        }
        calcAngleBwDots();
    });

    const calcAngleBwDots = () => {
        if (arrLength) {
            setDotAngle(360 / arrLength);
        }
    };

    return (
        <StyledContainer>
            {MOCKARRAY.map((e, i) => {
                return <ListDot content={e} dotIndex={i} dotAngle={i * dotAngle} dotLength={arrLength} key={i} />;
            })}
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    position: absolute;
    width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: #f0f; */
`;

export default ListItemDots;
