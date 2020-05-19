import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/link.svg';

const OuterWrapper = styled.div`
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 1;
    box-shadow: 0 0px 20px -5px ${({ theme, activeColor }) => theme[activeColor]};
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;
const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 5px;
`;
const StyledParagraph = styled(Paragraph)`
  max-width: 38ch;
  line-height: 1.5;
  margin-bottom: 0;

  ${({ readMore }) =>
    readMore &&
    css`
      text-transform: uppercase;
      margin-bottom: auto;
      font-weight: ${({ theme }) => theme.bold};
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  position: absolute;
  top: 25px;
  right: 25px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
`;
const StyledLinkButton = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  border-radius: 50%;
  background: white url(${linkIcon});
  background-repeat: no-repeat;
  background-position: 50% ;
  background-size: 45%;
`;

const Card = ({ cardType }) => (
  <OuterWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>My best note ever</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && (<StyledAvatar src={`http://twivatar.glitch.me/${'hello_roman'}`} />)}
      {cardType === 'article' && <StyledLinkButton />}
    </InnerWrapper>
    <InnerWrapper flex>
      <StyledParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nesciunt, libero tenetur autem nisi doloribus quod maxime?
      </StyledParagraph>
      <StyledParagraph readMore>Read more</StyledParagraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </OuterWrapper>
);

export default Card;

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};
Card.defaultProps = {
  cardType: 'note',
};
