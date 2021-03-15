import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import VerticalMenu from '../VerticalMenu/VerticalMenu';

type Props = {
    data?: [];
};

type StyledProps = {
    background?: string;
};

const PortfolioPage: FC<Props> = (props) => {
    const { data } = props;

    return (
        <StyledContainer>
            <VerticalMenu />
            <div style={{ color: '#fff' }}></div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fff;
`;

export default PortfolioPage;
