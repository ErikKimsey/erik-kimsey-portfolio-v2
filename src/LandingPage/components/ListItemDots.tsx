import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListDot } from './index';

const MOCKARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

type Props = {
    title?: string;
    dotActive?: boolean;
};

type StyledProps = {
    color?: string;
};

const ListItemDots: FC<Props> = (props) => {
    const { dotActive } = props;
    const [arrLength, setArrLength] = useState<number>(MOCKARRAY.length);
    const [dotAngle, setDotAngle] = useState<number>(0);

    useEffect(() => {
        if (arrLength === undefined || arrLength <= 0) {
            setArrLength(MOCKARRAY.length);
        }
        calcAngleBwDots();
        console.log('DOT active in ListITems', dotActive);
    }, []);

    const calcAngleBwDots = () => {
        if (arrLength) {
            setDotAngle(360 / arrLength);
        }
    };

    return (
        <>
            {dotActive && (
                <StyledContainer>
                    {MOCKARRAY.map((e, i) => {
                        return (
                            <ListDot
                                dotContent={e}
                                dotIndex={i}
                                dotAngle={i * dotAngle}
                                dotLength={arrLength}
                                key={i}
                            />
                        );
                    })}
                </StyledContainer>
            )}
        </>
    );
};

const StyledContainer = styled.div<StyledProps>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default ListItemDots;
