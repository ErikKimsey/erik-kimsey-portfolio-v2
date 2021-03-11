import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    link?: string;
    dotContent?: string;
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
                    {dotContent}
                    <Link to={`./${linkURI}`}>{linkURI}</Link>
                </StyledContainer>
            )}
        </>
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
        `rotate(${props.dotAngle}deg) translate(${props.dotTranslateX}px, ${props.dotTranslateY}px) rotate(-${props.dotAngle}deg)`};
`;

export default ListDot;
