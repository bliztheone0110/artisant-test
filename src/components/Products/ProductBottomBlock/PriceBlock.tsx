import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPriceBlock = styled.div`
    text-align: right;
`

const PropertyTitle = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.small + 'px'};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey};
    line-height: 24px;
`

const Price = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.blue};
    line-height: 24px;
`

type PriceBlockProps = {
    initial_price: number;
}

const PriceBlock: FC<PriceBlockProps> = (props) => {
    return (
        <StyledPriceBlock>
            <PropertyTitle>price</PropertyTitle>
            <Price>{props.initial_price} ETH</Price>
        </StyledPriceBlock>
    );
};

export default PriceBlock;