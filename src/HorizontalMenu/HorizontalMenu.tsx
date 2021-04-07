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
                <Hamburger toggled={isOpen} toggle={() => handleActiveMenu()} size={50} color="#FF99FE" margin={20} />
                {/* <FontAwesomeIcon
                    icon={faBars}
                    size="1x"
                    style={{ color: '#FF99FE', width: '50px', height: '50px', margin: '20px' }}
                    onClick={() => handleActiveMenu()}
                /> */}
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
`;

export default HorizontalMenu;
