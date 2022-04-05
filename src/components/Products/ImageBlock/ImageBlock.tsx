import React, { FC } from 'react';
import styled from 'styled-components';
import img from '../../../img/ProductPlaceholder.png'
import BottomText from './BottomText';
import TopText from './TopText';

export const ProductImageWrapper = styled.div`
    padding-bottom: 132.46%;
    position: relative;
    width: 100%;
    flex-shrink: 0;
`;

export const ProductImage = styled.img`
    position: absolute;
    width: 100%;
    inset: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
    user-select: none;
`;

export const ImageTextContainer = styled.div`
    position: absolute;
    inset: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    z-index: 2;
`

type ImageBlockProps = {
    display_name: string,
    type: string,
    name: string,
}

const ImageBlock: FC<ImageBlockProps> = (props) => {
    return (
        <ProductImageWrapper>
            <ProductImage src={img} />
            <ImageTextContainer>
                <TopText display_name={props.display_name}/>
                <BottomText type={props.type} name={props.name} />
            </ImageTextContainer>
        </ProductImageWrapper>
    );
};

export default ImageBlock;