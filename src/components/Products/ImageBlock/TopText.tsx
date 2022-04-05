import React, { FC } from 'react';
import styled from 'styled-components';

export const ImageTopTextHeader = styled.span`
    display: block;
    font-weight: 400;
    font-size: ${({theme}) => theme.fontSizes.small + 'px'};
    color: ${({theme}) => theme.colors.lightGrey};
    margin-bottom: 2px;
`

export const ImageAuthorText = styled.span`
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSizes.normal + 'px'};
    color: ${({theme}) => theme.colors.white};
`

type TopTextProps = {
    display_name: string,
}

const TopText: FC<TopTextProps> = (props) => {
    return (
        <div>
            <ImageTopTextHeader>created by</ImageTopTextHeader>
            <ImageAuthorText>
                {props.display_name}
            </ImageAuthorText>
        </div>
    );
};

export default TopText;