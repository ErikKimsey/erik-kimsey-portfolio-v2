import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkItem from './WorkItem';
import { WorkItemType } from './types';

type Props = {
    workItemData?: WorkItemType[];
};

type StyledProps = {
    bkgrd?: string;
};

const WorkItemList: FC<Props> = (props) => {
    const { workItemData } = props;

    useEffect(() => {
        console.log(workItemData);
    }, []);

    const ItemList = () => {
        if (workItemData != undefined) {
            return workItemData.map((e, i) => {
                return <WorkItem workItemData={e} key={i} />;
            });
        }
    };

    return <StyledContainer>{ItemList()}</StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 90%;
    height: 100%;
    padding: 10px;
`;

export default WorkItemList;

{
    /* {() => {
            if (workItemData && workItemData.length > 0) {
                return workItemData.map((e) => {
                    return <WorkItem workItemData={e} />;
                });
            }
        }} */
}
