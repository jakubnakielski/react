import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    padding: 25px 130px 25px 70px;

    @media(min-width: 2800px) {
    width: 1890px;
    margin: 0 auto;
    }
`;
const StyledGrid = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(auto-fit, 450px);
    grid-gap: 100px 90px;
    justify-content: baseline;
    margin-top: 40px;

    @media(min-width: 2800px) {
        grid-template-columns: repeat(4, 450px);
    }
`;
const StyledPageHeader = styled.div`
    grid-column: 1 / 4;
`;
const StyledHeading = styled(Heading)`
    margin: 30px 0 0px;
    text-transform: capitalize;
`;
const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.grey300};
`;
const GridTemplate = ({ cardType, children, itemsLength }) => (
    <UserPageTemplate pageType={cardType}>
        <StyledWrapper>
            <StyledPageHeader>
                <Input placeholder="Search" search />
                <StyledHeading big>{cardType}</StyledHeading>
                <StyledParagraph>{itemsLength} {cardType}</StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
        </StyledWrapper>
    </UserPageTemplate>
);

export default GridTemplate;

GridTemplate.propTypes = {
    cardType: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}