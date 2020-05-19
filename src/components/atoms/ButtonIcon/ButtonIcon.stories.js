import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/bulb.svg';
import linkIcon from 'assets/link.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Atoms/ButtonIcon',
  decorators: [(storyFn) => <Background>{storyFn()}</Background>],
};

const Background = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.note};
`;

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;
export const Link = () => <ButtonIcon icon={linkIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
export const Active = () => <ButtonIcon icon={twitterIcon} active />;
