import React, { FC } from 'react';
import styled from 'styled-components';

const PropertyTitle = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.normal + 'px'};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey};
    line-height: 24px;
`

const AvailableValue = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    line-height: 24px;
`

type AvailableBlockProps = {
    available: number;
    quantity_nfts_created: number,
}

const AvailableBlock: FC<AvailableBlockProps> = (props) => {
    return (
        <div>
            <PropertyTitle>available</PropertyTitle>
            <AvailableValue>{props.available} of {props.quantity_nfts_created}</AvailableValue>
        </div>
    );
};

export default AvailableBlock;