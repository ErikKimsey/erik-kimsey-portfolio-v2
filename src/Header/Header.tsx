import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/fonts.css';

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
            <h1 className="name">{name}</h1>
            <h1>_</h1>
            <h1 className="title">{title}</h1>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: row;
    font-family: 'Kiona';
    h1 {
        color: #fff;
        text-align: center;
        font-size: 32px;
        &.name {
            color: #f9f;
        }
        &.title {
        }
        @media (min-width: 300px) {
            font-size: 22px;
        }
        @media (min-width: 700px) {
            font-size: 28px;
        }
        @media (min-width: 1080px) {
            font-size: 32px;
        }
    }
`;

export default HeaderComponent;
