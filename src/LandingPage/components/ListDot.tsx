import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    link?: string;
    dotContent?: string;
    dotIndex?: number;
    dotAngle?: number;
    dotLength?: number;
    dotActive?: boolean;
};

type StyledProps = {
    textColor?: string;
    dotHeight?: number;
    dotWidth?: number;
    dotAngle?: number;
    dotIndex?: number;
    dotLength?: number;
    isActive?: boolean;
};

const ListDot: FC<Props> = (props) => {
    const { dotContent, dotIndex, dotAngle, dotLength, dotActive } = props;
    const [isDotActive, setIsDotActive] = useState<boolean>();
    const [dotTranslate, setDotTranslate] = useState<number>(0);

    useEffect(() => {
        if (isDotActive === undefined) {
            setIsDotActive(false);
        }
    }, []);

    useEffect(() => {
        setIsDotActive(!isDotActive);
        if (isDotActive && dotIndex) {
            setDotTranslate(dotIndex);
        } else {
            setDotTranslate(0);
        }
    }, [dotActive]);

    return (
        <StyledContainer dotIndex={dotTranslate} isActive={isDotActive} dotAngle={dotAngle} dotLength={dotLength}>
            {dotContent}
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
