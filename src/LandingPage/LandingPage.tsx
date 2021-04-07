import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuItemList from '../DotMenu/MenuItemList';

type Props = {
    header?: string;
};

type StyledProps = {
    bg?: string;
    textColor?: string;
    h1TextColor?: string;
};

const LandingPage: FC<Props> = ({}) => {
    return (
        <StyledContainer bg="">
            <MenuItemList />
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default LandingPage;
