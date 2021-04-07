import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DOT_DATA } from '../data/index';
import HorizontalDot from './HorizontalDot';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';

type Props = {
    name?: string;
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

const HorizontalMenu: FC<Props> = (props) => {
    const {} = props;
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        //
    }, [isActive]);

    const handleActiveMenu = () => {
        setOpen(!isOpen);
        setIsActive(!isActive);
    };

    return (
        <>
            <StyledContainer>
                <div className="burgerIconDiv" style={{ margin: 3 }}>
                    <Hamburger toggled={isOpen} toggle={() => handleActiveMenu()} size={50} color="#FF99FE" />
                </div>
                {isActive &&
                    DOT_DATA.map((e) => {
                        return <HorizontalDot dotContent={e} dotActive={isActive} />;
                    })}
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div<StyledProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 100%;
    padding: 0;
    .burgerIconDiv {
        &:hover {
            transform: scale(1.1);
        }
    }
    @media (max-width: 1020px) {
        /* width: 80vw; */
        position: absolute;
        left: 20px;
        height: auto;
        width: 60px;
        display: flex;

        flex-direction: column;
        justify-content: flex-start;
        align-content: space-between;
        /* background-color: #f0f; */
        /* &:active {
            width: 130px;
            height: 130px;
            background-color: #000;
        } */
    }
`;

export default HorizontalMenu;
