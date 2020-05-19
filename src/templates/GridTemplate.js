import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card'

const StyledGridWrapper = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, 470px);
    grid-gap: 100px 90px;
    justify-content: center;
    padding: 80px 60px;
`;

const GridTemplate = ({ cardType }) => (
    <StyledGridWrapper>
        <Card cardType={cardType} />
        <Card cardType={cardType} />
        <Card cardType={cardType} />
        <Card cardType={cardType} />
        <Card cardType={cardType} />
        <Card cardType={cardType} />
    </StyledGridWrapper>
);

export default GridTemplate;