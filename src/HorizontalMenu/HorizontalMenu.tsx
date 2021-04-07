import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DOT_DATA } from '../data/index';
import VerticalDot from './HorizontalDot';

type Props = {
    name?: string;
};

type StyledDotProps = {
    bkgrdColor?: string;
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

const VerticalMenu: FC<Props> = (props) => {
    const {} = props;

    console.log(DOT_DATA);

    return (
        <>
            <StyledContainer>
                {DOT_DATA.map((e) => {
                    return <VerticalDot dotContent={e} />;
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

export default VerticalMenu;
