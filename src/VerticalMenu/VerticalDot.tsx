import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DotContent {
    iconName?: IconProp;
    routeName?: string;
}

type Props = {
    link?: string;
    dotContent?: DotContent;
};

type StyledProps = {
    dotHeight?: number;
    dotWidth?: number;
};

const VerticalDot: FC<Props> = (props) => {
    const { dotContent, link } = props;
    console.log(dotContent);

    return (
        <>
            <StyledContainer>
                <Link to={`./${dotContent?.routeName}`}>
                    {dotContent?.iconName && (
                        <FontAwesomeIcon icon={dotContent?.iconName} size="3x" style={{ color: '#FF99FE' }} />
                    )}
                </Link>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.button<StyledProps>`
    outline: none;

    margin: 5px;
    width: 80px;
    height: 80px;
    border-color: #000;
    border-radius: 50px;
    background-color: #000;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default VerticalDot;
