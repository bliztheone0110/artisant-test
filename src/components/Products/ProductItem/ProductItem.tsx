import React, { FC } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import styled from 'styled-components';
import ImageBlock from '../ImageBlock/ImageBlock';
import ProductBottomBlock from '../ProductBottomBlock/ProductBottomBlock';

export const ProductItemWrapper = styled.article`
    display: block;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    overflow: hidden;
`;

type ProductItemProps = {
    product: ProductModel
}

const ProductItem: FC<ProductItemProps> = (props) => {
    return (
        <ProductItemWrapper>
            <ImageBlock
                display_name={props.product.created_by.display_name}
                name={props.product.name}
                type={props.product.type}
            />
            <ProductBottomBlock
                available={props.product.quantity_available}
                initial_price={props.product.initial_price}
                quantity_nfts_created={props.product.quantity_nfts_created}
            />
        </ProductItemWrapper>
    );
};

export default ProductItem;