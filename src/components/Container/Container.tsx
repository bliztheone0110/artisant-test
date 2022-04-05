import React, { FC } from 'react';
import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: 1380px;
    padding: ${({theme}) => theme.sizes.container.paddingSmall};
    margin: 0 auto;

    @media ${({ theme }) => theme.media.medium} {
        padding: ${({theme}) => theme.sizes.container.paddingLarge};
    }
`;


const Container: FC = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

export default Container;