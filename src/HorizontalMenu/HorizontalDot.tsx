import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink
                    to={`./${dotContent?.routeName}`}
                    activeStyle={{
                        padding: 10,
                        border: 'solid 3px #333',
                        borderRadius: 5,
                        // boxShadow: '3px 3px #fff',
                    }}
                    onClick={() => {
                        handleActiveMenu();
                    }}
                >
                    {dotContent?.iconName && (
                        <FontAwesomeIcon icon={dotContent?.iconName} size="3x" className="fontIcon" />
                    )}
                </NavLink>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.button<StyledProps>`
    display: flex;
    outline: none;
    margin: 0 15px;
    width: 50px;
    height: 50px;
    border-color: #000;
    border-radius: 100px;
    background-color: #000;
    color: #000;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: scale(1.1);
    }
    .fontIcon {
        color: #ffcdfe;
        &:active {
            color: #fff;
        }
    }
    @media (max-width: 1020px) {
        width: 40px;
        height: 40px;
        margin: 10px 10px;

        &:active {
            width: 130px;
            height: 130px;
            background-color: #000;
        }
    }
`;

export default HorizontalDot;
