import React, { FC } from 'react';
import ProductItem from './ProductItem/ProductItem';
import { ProductModel } from '../../models/ProductModel';
import styled from 'styled-components';

const ProductsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px 32px;

    @media ${({ theme }) => theme.media.extraSmall} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${({ theme }) => theme.media.medium} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${({ theme }) => theme.media.large} {
        grid-template-columns: repeat(4, 1fr);
    }
`

type ProductsProps = {
    products: ProductModel[],
}

const Products: FC<ProductsProps> = (props) => {
    return (
        <ProductsContainer>
            {props.products.map(product =>
                <ProductItem key={product.product_id} product={product} />
            )}
        </ProductsContainer>
    );
};

export default Products;