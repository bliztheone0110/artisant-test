import React, { FC } from 'react';
import Title from '../../UI/Title/Title';
import Text from '../../UI/SubTitle/SubTitle';
import Products from '../../Products/Products';
import { ProductModel } from '../../../models/ProductModel';
import Checkbox from '../../UI/Checkbox/Checkbox';
import styled from 'styled-components';

type MainProps = {
    products: ProductModel[],
    checkboxChangeHandler: () => void,
    isCheckboxChecked: boolean,
}

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 32px;

    @media ${({ theme }) => theme.media.small} {
        flex-direction: row;
        align-items: center;
    }
`

const Main: FC<MainProps> = (props) => {
    return (
        <main>
            <Title text='Explore' />
            <FlexContainer>
                <Text text='Buy and sell digital fashion NFT art' />
                <Checkbox label='show only available' checked={props.isCheckboxChecked} onChange={props.checkboxChangeHandler} />
            </FlexContainer>
            <Products products={props.products} />
        </main>
    );
};

export default Main;