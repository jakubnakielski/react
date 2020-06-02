import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import LoginForm from 'components/molecules/LoginForm/LoginForm'
import logo from 'assets/logo.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import bulbIcon from 'assets/bulb.svg';

const StyledWrapper = styled.div`
    width: 400px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.note};
    padding-top: 0px;
`;
const StyledLogo = styled('img')`
    width: 180px;
    height: 180px;
    filter: invert(1);
`;
const StyledHeading = styled(Heading)`
    text-align: center;
`;
const IconsWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content:space-between;
`

const Login = () => (
    <StyledWrapper>
        <StyledLogo src={logo} />
        <StyledHeading>Your new favorite online notes experience</StyledHeading>
        <IconsWrapper>
            <img src={penIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={bulbIcon} alt="" />
        </IconsWrapper>
        <LoginForm />
    </StyledWrapper>
);

export default Login;