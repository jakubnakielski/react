import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import logo from 'assets/logo.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import bulbIcon from 'assets/bulb.svg';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const IconsWrapper = styled.div`;
    width: 200px;
    display: flex;
    justify-content: space-between;

`
const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.notes};
`;
const StyledLogo = styled('img')`
    height: 150px;
    width: 150px;
    filter: invert(1);
`;
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 500px;
    height: 400px;
    padding: 30px 50px;
    border-radius: 5px;
    box-shadow: 0px 8px 10px 0 hsl(0, 0%,0%, 0.2);
`;
const StyledInput = styled(Input)`
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyledParagraph = styled(Paragraph)`
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: black;
`;

const LoginPage = () => (
    <StyledWrapper>
        <StyledLogo src={logo} alt='' />
        <IconsWrapper>
            <img src={penIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={bulbIcon} alt="" />
        </IconsWrapper>
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}
        >
            {({ setSubmitting }) => (
                <StyledForm>
                    <Heading>Sign up</Heading>
                    <StyledInput as={Field} type='text' name='username' placeholder='username' />
                    <StyledInput as={Field} type='password' name='password' placeholder='password' />
                    <Button activecolor='notes'>register</Button>
                    <StyledParagraph as={Link} to={routes.login}>back to login page</StyledParagraph>
                </StyledForm>
            )}

        </Formik>

    </StyledWrapper>
);

export default LoginPage;