import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import onClickOutside from "react-onclickoutside";
import { connect } from "react-redux";
import { addItemAction } from "actions";
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
// import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 680px;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 80px 50px;
    transition: transform .25s ease-out;
    border-left: 8px solid ${({ theme, activeColor }) => theme[activeColor]};
    box-shadow: 0 0px 20px -10px ${({ theme, activeColor }) => theme[activeColor]};
    transform: translateX(${({ isVisible }) => isVisible ? '0' : '110%'});
`;
const StyledParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.grey300};
    font-size: ${({ theme }) => theme.fontSize.s};
`;
const StyledInput = styled(Input)`
    width: 85%;
    margin-bottom: 30px;
`;
const StyledTextArea = styled(Input)`
    height: 30vh;
    margin: 30px 0 100px;
    border-radius: 20px;
    /* font-size: ${({ theme }) => theme.fontSize.m}; */
`;
const StyledButton = styled(Button)`
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;

class NewItemBar extends React.Component {

    handleClickOutside = (ev) => {
        const { closeFn } = this.props;
        const closeButton = document.querySelector('#closeButton');

        if (ev.target === closeButton) return;
        else closeFn();
    }

    render() {
        const { pageTypeContext: pageType, isVisible, addItem, closeFn } = this.props;

        return (
            <StyledWrapper activeColor={pageType} isVisible={isVisible}>
                <Heading big>Create new {pageType}</Heading>
                <StyledParagraph>A note requires title and description</StyledParagraph>
                <StyledInput placeholder={pageType === 'twitters' ? 'Account name eg. hello_roman' : 'title'} />
                {pageType === 'articles' && <StyledInput placeholder='link' />}
                <StyledTextArea as='textarea' placeholder="description" />
                <StyledButton onClick={() => {
                    addItem(pageType, { title: 'title1', link: 'link1', description: 'desc1' });
                    closeFn();
                }} activeColor={pageType}
                >
                    add note</StyledButton>
            </StyledWrapper>
        )
    }
}

NewItemBar.propTypes = {
    pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool.isRequired,
}

NewItemBar.defaultProps = {
    pageTypeContext: 'notes',
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemType, title, link, description) => dispatch(addItemAction(itemType, title, link, description))
})

export default connect(null, mapDispatchToProps)(withContext(onClickOutside(NewItemBar)));
