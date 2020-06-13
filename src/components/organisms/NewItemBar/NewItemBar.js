import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItemAction } from 'actions';
import onClickOutside from "react-onclickoutside";
import { Formik, Form, Field } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
// import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div` // styled(Forma)
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
    margin: 20px 0 100px;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.m};
`;
const StyledButton = styled(Button)`// moze byc samo Button?
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;
class NewItemBar extends React.Component {

    handleClickOutside = (ev) => {
        const { handleClose } = this.props;
        const closeButton = document.querySelector('#closeButton');

        if (ev.target === closeButton) return;
        else handleClose();
    }

    render() {
        const { pageTypeContext: pageType, isVisible, handleClose, addItem } = this.props;

        return (

            <StyledWrapper activeColor={pageType} isVisible={isVisible}>
                <Heading big>Create new {pageType}</Heading>
                <StyledParagraph>A note requires title and description</StyledParagraph>

                <Formik
                    initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        addItem(pageType, values);
                        handleClose();
                        setSubmitting(false);
                    }}
                >
                    {({ setSubmitting, values, handleChange, handleBlur }) => (
                        <StyledForm>
                            <StyledInput
                                type='text'
                                name='title'
                                placeholder='title'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {pageType === 'twitters' && <StyledInput
                                type='text'
                                name='twitterName'
                                placeholder='Account name
                                eg. hello_roman'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.twitterName}
                            />}
                            {pageType === 'articles' && <StyledInput
                                type='text'
                                name='articleUrl'
                                placeholder='link'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.articleUrl}
                            />}
                            <StyledTextArea
                                as="textarea"
                                type='text'
                                name='content'
                                placeholder="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                            />
                            <StyledButton
                                type="submit"
                                activeColor={pageType}
                            // disabled={setSubmitting}
                            > add note </StyledButton>
                        </StyledForm>
                    )}
                </Formik>

            </StyledWrapper >
        )
    }
}

NewItemBar.propTypes = {
    pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool,
}

NewItemBar.defaultProps = {
    pageTypeContext: 'notes',
    isVisible: false,
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
})

export default connect(null, mapDispatchToProps)(withContext(onClickOutside(NewItemBar)));
