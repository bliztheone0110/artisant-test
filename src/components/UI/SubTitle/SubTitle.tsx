import React, { FC } from 'react';
import styled from "styled-components";

export const StyledSubTitle = styled.p`
    font-size: ${({theme}) => theme.fontSizes.normal + 'px'};
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: ${({theme}) => theme.colors.titleGrey};
    padding-left: 2px;
`;

type SubTitleProps = {
    text: string,
}

const SubTitle: FC<SubTitleProps> = (props) => {
    return (
        <StyledSubTitle>
            {props.text}
        </StyledSubTitle>
    );
};

export default SubTitle;