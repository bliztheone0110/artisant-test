import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Main from './Main';
import { fetchProducts } from '../../../store/reducers/products/action-creator';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ProductModel } from '../../../models/ProductModel';
import Loader from './../../Loader/Loader';

const MainContainer = () => {
    const dispatch = useAppDispatch()
    const { products, productsError, isProductsLoading } = useAppSelector(state => state.productsReducer)
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
    const [productsToShow, setProductsToShow] = useState([] as ProductModel[])

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useMemo(() => {
        if (isCheckboxChecked) {
            const productsToShow = products.filter(product => product.quantity_available > 0)

            setProductsToShow(productsToShow)
        } else {
            setProductsToShow(products)
        }
    }, [products, isCheckboxChecked])

    const checkboxChangeHandler = useCallback((): void => {
        setIsCheckboxChecked(prev => !prev)
    }, [])

    return (
        <>
            <Main products={productsToShow} checkboxChangeHandler={checkboxChangeHandler} isCheckboxChecked={isCheckboxChecked} />
            {isProductsLoading && <Loader />}
            {productsError && <h2>{productsError}</h2>}
        </>
    );
};

export default MainContainer;