import React, { FC, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DotContent {
    iconName?: IconProp;
    routeName?: string;
}

type Props = {
    link?: string;
    dotContent?: DotContent;
    dotIndex?: number;
    dotAngle?: number;
    dotLength?: number;
    dotActive?: boolean;
    linkURI?: string;
};

type StyledProps = {
    textColor?: string;
    dotHeight?: number;
    dotWidth?: number;
    dotAngle?: number;
    dotTranslateY?: number;
    dotTranslateX?: number;
    dotLength?: number;
    isActive?: boolean;
};

const ListDot: FC<Props> = (props) => {
    const { dotContent, dotIndex, dotAngle, dotLength, dotActive, linkURI } = props;
    console.log(dotContent);

    const [isDotActive, setIsDotActive] = useState<boolean>(false);
    const [dotTranslateY, setDotTranslateY] = useState<number>(0);
    const [dotTranslateX, setDotTranslateX] = useState<number>(0);

    useEffect(() => {
        if (dotIndex != undefined) {
            setIsDotActive(true);
            setDotTranslateX(dotIndex);
            setDotTranslateY(dotIndex + 140);
        }
    }, []);

    return (
        <>
            {isDotActive && (
                <StyledContainer
                    dotTranslateY={dotTranslateY}
                    dotTranslateX={dotTranslateX}
                    isActive={isDotActive}
                    dotAngle={dotAngle}
                    dotLength={dotLength}
                >
                    <Link to={`./${dotContent?.routeName}`}>
                        {dotContent?.iconName && (
                            <FontAwesomeIcon icon={dotContent?.iconName} size="3x" style={{ color: '#ffcdfe' }} />
                        )}
                    </Link>
                </StyledContainer>
            )}
        </>
    );
};

const DotInAnimation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

const BorderAnimation = keyframes`
    0% {border: solid 0px #000;}
    25% {border: solid 8px rgb(88, 53, 121);}
    75% {border: solid 4px rgb(57, 43, 70);}
    100% {border: solid 2px #333;}
`;

const StyledContainer = styled.button<StyledProps>`
    position: absolute;
    outline: none;
    margin: 0px;
    width: 80px;
    height: 80px;
    border-color: #000;
    border-radius: 50px;
    background-color: #000;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 2px #fff; */
    transform: ${(props) =>
        `rotate(-${props.dotAngle}deg) translate(${props.dotTranslateX}px, ${props.dotTranslateY}px) rotate(${props.dotAngle}deg)`};
    animation-name: ${(props) => (props.isActive === true ? DotInAnimation : 'none')};
    animation-duration: 1s;
    animation-iteration-count: 1;
    &:active {
        background-color: #000;
        border: solid 2px #aaa;
    }
    &:hover {
        background-color: #000;
        animation: ${BorderAnimation} 500ms linear;
    }
`;

export default ListDot;
