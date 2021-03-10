import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    link?: string;
    content?: string;
    dotIndex?: number;
    dotAngle?: number;
    dotLength?: number;
};

type StyledProps = {
    textColor?: string;
    dotHeight?: number;
    dotWidth?: number;
    dotAngle?: number;
    dotIndex?: number;
    dotLength?: number;
};

const ListDot: FC<Props> = (props) => {
    const { content, dotIndex, dotAngle, dotLength } = props;
    const [translateValue, setTransValue] = useState<number>();
    console.log('...');
    console.log(dotAngle);
    console.log('...');
    useEffect(() => {
        if (dotAngle) {
            setTransValue(dotAngle / 2);
        }
    });

    return (
        <StyledContainer dotIndex={dotIndex} dotAngle={dotAngle} dotLength={dotLength}>
            {content}
        </StyledContainer>
    );
};

const StyledContainer = styled.button<StyledProps>`
    z-index: 1000;
    position: absolute;
    outline: none;
    margin: 5px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${(props) =>
        `rotate(${props.dotAngle}deg) translate(${props.dotIndex}px, 200px) rotate(-${props.dotAngle}deg)`};
    /* width: ${(props) => props.dotAngle}; */
    /* translate: 300px; */
`;

export default ListDot;
