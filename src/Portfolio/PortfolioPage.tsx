import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItemDots from '../DotMenu/MenuItemList';
import WorkItemList from './WorkItemList';
import { WORK_HISTORY } from '../data/WorkHistory';
import { WorkItemType } from './types';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';

type Props = {
    data?: [];
};

type StyledProps = {
    background?: string;
};

const PortfolioPage: FC<Props> = (props) => {
    const { data } = props;
    const [workHistory, setWorkHistory] = useState<WorkItemType[]>();

    useEffect(() => {
        if (WORK_HISTORY && WORK_HISTORY.length > 0) {
            setWorkHistory(WORK_HISTORY);
        }
    }, []);

    return (
        <StyledContainer>
            <HorizontalMenu />
            {workHistory && <WorkItemList workItemData={workHistory} />}
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fff;
`;

export default PortfolioPage;
