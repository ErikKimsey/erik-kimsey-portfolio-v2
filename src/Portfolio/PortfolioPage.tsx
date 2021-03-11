import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

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
            <div style={{ color: '#fff' }}></div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    color: #fff;
`;

export default PortfolioPage;
