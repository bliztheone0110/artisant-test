import React from 'react';
import styled from 'styled-components';
import Spiner from './Spiner';

const StyledLoader = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Loader = () => {
    return (
        <StyledLoader>
            <Spiner />
        </StyledLoader>
    );
};

export default Loader;