import React, { FC } from 'react';
import styled from 'styled-components';

export const ImageTextBottom = styled.span`
    display: block;
    font-weight: 400;
    font-size: ${({theme}) => theme.fontSizes.large + 'px'};
    color: ${({theme}) => theme.colors.white};
`

type BottomTextProps = {
    type: string,
    name: string
}

const BottomText: FC<BottomTextProps> = (props) => {
    return (
        <div>
            <ImageTextBottom>{props.type}</ImageTextBottom>
            <ImageTextBottom>{props.name}</ImageTextBottom>
        </div>
    );
};

export default BottomText;