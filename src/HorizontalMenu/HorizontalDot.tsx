import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface DotContent {
    iconName?: IconProp;
    routeName?: string;
}

type Props = {
    link?: string;
    dotContent?: DotContent;
    dotActive?: boolean;
};

type StyledProps = {
    dotHeight?: number;
    dotWidth?: number;
    dotActive?: boolean;
};

const HorizontalDot: FC<Props> = (props) => {
    const { dotContent, dotActive } = props;

    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => {
        // console.log(isActive);
    }, [dotActive]);

    const handleActiveMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <StyledContainer dotActive={isActive}>
                <Link
                    to={`./${dotContent?.routeName}`}
                    onClick={() => {
                        handleActiveMenu();
                    }}
                >
                    {dotContent?.iconName && (
                        <FontAwesomeIcon icon={dotContent?.iconName} size="3x" className="fontIcon" />
                        // <FontAwesomeIcon icon={dotContent?.iconName} size="3x" style={{ color: '#FF99FE' }} className='icon'/>
                    )}
                </Link>
            </StyledContainer>
        </>
    );
};

const ScaleIconOnLoad = keyframes`
    0%: {transform:scale(1.0)}
    50%: {transform:scale(1.4)}
    100%: {transform:scale(1.0)}
`;

const StyledContainer = styled.button<StyledProps>`
    display: flex;
    outline: none;
    margin: 3px;
    width: 80px;
    height: 80px;
    border-color: #000;
    border-radius: 100px;
    background-color: #000;
    color: #000;
    justify-content: center;
    align-items: center;
    .fontIcon {
        color: #ffcdfe;
        &:active {
            color: #fff;
        }
    }
`;

export default HorizontalDot;
