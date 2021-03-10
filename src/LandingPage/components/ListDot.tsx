import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    link?: string;
    content?: string;
    dotIndex?: number;
};

type StyledProps = {
    textColor?: string;
    dotHeight?: number;
    dotWidth?: number;
};

const ListDot: FC<Props> = (props) => {
    const { content, dotIndex } = props;

    return <StyledContainer>{content}</StyledContainer>;
};

const StyledContainer = styled.button<StyledProps>`
    /* position: absolute;  */
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
`;

export default ListDot;
