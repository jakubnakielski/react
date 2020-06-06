import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import withContext from 'hoc/withContext.js';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
    padding: 25px 130px 25px 70px;

    ${({hasBlur}) => hasBlur && css`
    filter: blur(5px);
    pointer-events:none;
    `}
    transition: filter .3s;

    @media(min-width: 2800px) {
    width: 1890px;
    margin: 0 auto;
    }
`;
const StyledGrid = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(auto-fit, 440px);
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
const StyledButtonIcon = styled(ButtonIcon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    z-index: 2;
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
    background-size: 35%;
    border-radius: 50%;
    transition: .2s ease-out;

    ${({ isOpen }) => (isOpen && css`transform: rotate(45deg);`)}
`;
class GridTemplate extends React.Component {
    state = {
        isItemBarOpen: false, //false
    }

    toggleItemBarVisibility = () => {
        this.setState((prevState) => ({
            isItemBarOpen: !prevState.isItemBarOpen,
        }))
    };

    closeItemBar = () => { //try lexical this
        this.setState({isItemBarOpen: false})
    }

    render() {
        const { children, itemsLength, pageTypeContext } = this.props;
        const { isItemBarOpen } = this.state;

        return (
            <UserPageTemplate>
                <StyledWrapper hasBlur={isItemBarOpen}>
                    <StyledPageHeader>
                        <Input placeholder="Search" search />
                        <StyledHeading big>{pageTypeContext}</StyledHeading>
                        <StyledParagraph>{itemsLength} {pageTypeContext}</StyledParagraph>
                    </StyledPageHeader>
                    <StyledGrid>{children}</StyledGrid>

                </StyledWrapper>
                <StyledButtonIcon
                    icon={plusIcon}
                    activeColor={pageTypeContext}
                    onClick={this.toggleItemBarVisibility}
                    isOpen={isItemBarOpen}
                    id='closeButton'
                />
                <NewItemBar isVisible={isItemBarOpen} closeFn={this.closeItemBar} />

            </UserPageTemplate>

        )
    }
}
GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    itemsLength: PropTypes.number.isRequired,
    pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
}

GridTemplate.defaultProps = {
    pageTypeContext: 'notes',
}

export default withContext(GridTemplate);