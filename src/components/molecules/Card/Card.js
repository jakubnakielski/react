import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from 'actions';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/link.svg';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  animation: appear 0.4s ease-out;
  will-change: transform;

  :hover {cursor: pointer}

  @keyframes appear {
  0% { opacity: 0; transform: translate(10px, 30px) }
  100% { opacity: 1; 
  }
}
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${({ cardType }) => cardType !== 'note' ? '21ch' : '26ch'};
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
  background: ${({ theme }) => theme.twitters};
  border: 5px solid ${({ theme }) => theme.twitters};
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

class Card extends React.Component {
  state = {
    redirected: false,
  }

  handleCardClick = () => {
    this.setState({ redirected: true })
  }

  render() {
    const { id, cardType, title, created, twitterName, articleUrl, content, removeItem } = this.props;

    if (this.state.redirected) {
      return <Redirect to={`${cardType}/${id}`} />
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading cardType={cardType}>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (<StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />)}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <StyledParagraph>{content}</StyledParagraph>
          <StyledParagraph readMore>Read more</StyledParagraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>REMOVE</Button>
        </InnerWrapper>
      </StyledWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};
Card.defaultProps = {
  cardType: 'notes',
};
