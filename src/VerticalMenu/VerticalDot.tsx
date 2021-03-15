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
    const { dotContent } = props;
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleHover = (v: boolean) => {
        setIsHover(v);
    };

    return (
        <>
            <StyledContainer>
                <Link to={`./${dotContent?.routeName}`}>
                    {dotContent?.iconName && (
                        <FontAwesomeIcon icon={dotContent?.iconName} size="3x" className="fontIcon" />
                        // <FontAwesomeIcon icon={dotContent?.iconName} size="3x" style={{ color: '#FF99FE' }} className='icon'/>
                    )}
                </Link>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.button<StyledProps>`
    outline: none;
    margin: 3px;
    width: 80px;
    height: 80px;
    border-color: #000;
    border-radius: 100px;
    background-color: #000;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .fontIcon {
        color: #ff99fe;
        &:active {
            color: #fff;
        }
    }
    &:hover {
        align-items: flex-end;
    }
`;

export default VerticalDot;
