import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { WorkItemType } from './types';

type Props = {
    workItemData?: WorkItemType;
};

type StyledProps = {
    brkgrd?: string;
    shouldDisplay?: boolean;
    xPos?: number;
    yPos?: number;
};

const WorkItem: FC<Props> = (props) => {
    const { workItemData } = props;

    return (
        <StyledContainer>
            <h3>{workItemData?.title}</h3>
            <h5>{workItemData?.employer}</h5>
            <i style={{ fontSize: '0.8em' }}>{workItemData?.date}</i>
            <ul className="skillslist">
                {workItemData?.coreSkills?.map((e, i) => {
                    if (workItemData && workItemData.coreSkills && i < workItemData.coreSkills?.length - 1) {
                        return <li className="skill-item">{`${e}, `}</li>;
                    }
                    return <li className="skill-item">{e}</li>;
                })}
            </ul>
            <div>{workItemData?.description}</div>
            <div>{workItemData?.link}</div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div<StyledProps>`
    padding-left: 20px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    color: #fff;
    h3,
    h5 {
        /* padding: 0; */
        margin: 0;
    }
    h3 {
        padding-left: 0px;
    }
    h5 {
        padding-left: 24px;
    }
    .skillslist {
        list-style-type: circle;
        /* list-style: none; */
        display: flex;
        flex-direction: column;
    }
`;

export default WorkItem;
