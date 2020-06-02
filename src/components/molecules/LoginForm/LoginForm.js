import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px -3px hsla(0,0%,0%,0.5);
`;
const StyledParagraph = styled(Paragraph)`
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.bold};

    :hover {
        cursor: pointer;
    }
`;
const StyledInput = styled(Input)`
    width: 80%;
`;
const LoginForm = () => (
    <StyledWrapper>
        <Heading>Sign in</Heading>
        <StyledInput placeholder="login" />
        <StyledInput placeholder="password" />
        <Button>Enter favnote</Button>
        <StyledParagraph>i want my account!</StyledParagraph>
    </StyledWrapper>
);


export default LoginForm;
