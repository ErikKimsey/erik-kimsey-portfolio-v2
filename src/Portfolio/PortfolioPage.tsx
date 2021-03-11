import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    data?: [];
};

type StyledProps = {
    background?: string;
};

const PortfolioPage: FC<Props> = (props) => {
    // const {} = props;

    return (
        <StyledContainer>
            <div style={{ color: '#fff' }}>YOYOYOY</div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    height: 60vh;
    width: 60vw;
    background-color: #a0a;
    color: #fff;
`;

export default PortfolioPage;
