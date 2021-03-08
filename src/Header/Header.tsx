import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    name?: string;
    title?: string;
};

type StyledProps = {
    bg?: string;
};

const HeaderComponent: FC<Props> = (props) => {
    const { name, title } = props;

    return (
        <StyledContainer>
            <h1>{name}</h1>
            <h2>{title}</h2>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    h1 {
        color: #fff;
        padding: 10px;
    }
    h2 {
        color: #fff;
        padding: 10px;
        align-self: flex-end;
    }
`;

export default HeaderComponent;
