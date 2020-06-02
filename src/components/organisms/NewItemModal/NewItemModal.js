import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
    position: relative;
    width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 100px 50px;
    border-left: 8px solid ${({ theme }) => theme.note};
`;
const StyledParagraph = styled(Paragraph)`
    font-size: ${({ theme }) => theme.fontSize.m}
`;
const StyledButton = styled(Button)`
    width: 50px;
    height: 50px;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: ${({ theme }) => theme.fontSize.xl};
    margin-left: auto;
    transform: rotate(45deg);
    
    :hover {
        filter: brightness(80%);
    }
    :before {
        content: 'CLOSE'
        position: absolute;
        top: 50%;
        left: -50px;
    }
`;
const StyledInput = styled(Input)`
    width: 65%;
    border-radius: 20px;
    
    ${({ description }) => (description && css`
    width: 80%; 
    height: 30%;
    `)}
`;
const NewItemModal = () => (
    <StyledWrapper>
        <Heading big>Add a new note</Heading>
        <StyledParagraph>A note requires title and description</StyledParagraph>
        <StyledInput placeholder="title" />
        <StyledInput placeholder="description" description />
        <Button>add note</Button>
        <StyledButton>+</StyledButton>
    </StyledWrapper>
);

export default NewItemModal;