import React, { FC } from 'react';
import styled from 'styled-components';
import PriceBlock from './PriceBlock';
import AvailableBlock from './AvailableBlock';

const StyledProductBottomBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
`

type ProductBottomBlockProps = {
    available: number,
    initial_price: number,
    quantity_nfts_created: number,
}

const ProductBottomBlock: FC<ProductBottomBlockProps> = (props) => {
    return (
        <StyledProductBottomBlock>
            <AvailableBlock available={props.available} quantity_nfts_created={props.quantity_nfts_created} />
            <PriceBlock initial_price={props.initial_price} />
        </StyledProductBottomBlock>
    );
};

export default ProductBottomBlock;