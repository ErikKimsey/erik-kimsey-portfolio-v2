import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListDot } from './index';

const MOCKARRAY = ['A', 'B', 'C', 'D', 'E'];

type Props = {
    title?: string;
};

type StyledProps = {
    color?: string;
};

const ListItemDots: FC<Props> = (props) => {
    const {} = props;

    return (
        <StyledContainer>
            {MOCKARRAY.map((e, i) => {
                return <ListDot content={e} />;
            })}
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default ListItemDots;
