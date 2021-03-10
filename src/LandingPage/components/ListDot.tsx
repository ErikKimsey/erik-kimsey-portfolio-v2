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

    return (
        <StyledContainer dotIndex={dotIndex} dotAngle={dotAngle} dotLength={dotLength}>
            {content}
        </StyledContainer>
    );
};

const StyledContainer = styled.button<StyledProps>`
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
        `rotate(${props.dotAngle}deg) translate(${props.dotIndex}px, 120px) rotate(-${props.dotAngle}deg)`};
`;

export default ListDot;
