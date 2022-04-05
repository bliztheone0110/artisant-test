import React, { FC } from 'react';
import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSizes.title + 'px'};
    line-height: 100%;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
    letter-spacing: 1px;
    margin-bottom: 24px;
`;

type TitleProps = {
    text: string;
}

const Title: FC<TitleProps> = (props) => {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    );
};

export default Title;