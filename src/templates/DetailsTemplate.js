import React from "react";
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "routes";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";

const StyledWrapper = styled.div`
  position: relative;
  padding: 50px 50px 25px 100px;
  max-width: 50vw;

  @media(max-width: 1200px){
    max-width: 80vw;
  }
`;
const StyledHeading = styled(Heading)`
  margin-bottom: 0;

  :first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
 ${({ removeButton, openArticle, theme }) => ((removeButton || openArticle) && css`
    text-decoration: underline;
    font-weight: ${theme.bold};
    color: black;
 `)}
  ${({ dateInfo, theme }) => (
    dateInfo ? css`
    color: ${theme.grey300};
    font-weight: ${theme.bold};
    text-transform: uppercase;
    margin: 5px 0 40px;
  ` :
      css`
    line-height: 3rem;
  `)}
`;
const StyledAvatar = styled('img')`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 50px;
  right: -80px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ pageType, title, content, twitterName, created, articleUrl }) => (
  <StyledWrapper>
    <StyledHeading big> {title} </StyledHeading>
    <StyledParagraph dateInfo>Created {created} ago</StyledParagraph>
    <StyledParagraph> {content} </StyledParagraph>

    {pageType === 'articles' &&
      <StyledParagraph as="a" href="https://google.com" openArticle>
        open article
      </StyledParagraph>
    }

    <Button as={Link} to={routes[pageType]} activecolor={pageType}>
      save / close
    </Button>
    {/* <StyledParagraph removeButton>remove note</StyledParagraph> */}
    {pageType === 'twitters' && <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />
    }
  </StyledWrapper>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
}

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
}

export default DetailsTemplate;
