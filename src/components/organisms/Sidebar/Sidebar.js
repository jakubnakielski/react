import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/logo.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';

const StyledWrapper = styled.div`
    width: 150px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background: ${({ theme, activeColor }) => activeColor ? theme[activeColor] : 'white'};
    box-shadow: 0 0px 30px -5px ${({ theme, activeColor }) => activeColor ? theme[activeColor] : '#111'};
`;
const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 67px;
    height: 67px;
    background-image: url(${logoIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
`;
const StyledLinksList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 10vh 0 auto;
`;
const StyledLogoutButton = styled(ButtonIcon)`
    background-size: 50%;
`;

const Sidebar = ({ pageType }) => (
    <StyledWrapper activeColor={pageType}>
        <StyledLogoLink to="/" />
        <StyledLinksList>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/"
                    exact
                    activeClassName="isActive"
                    icon={penIcon}
                />
            </li>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/twitters"
                    activeClassName="isActive"
                    icon={twitterIcon}
                />
            </li>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/articles"
                    activeClassName="isActive"
                    icon={bulbIcon}
                />
            </li>
        </StyledLinksList>

        <StyledLogoutButton
            as={NavLink}
            to="/login"
            activeClassName="isActive"
            icon={logoutIcon}
        />
    </StyledWrapper>
);


export default Sidebar;