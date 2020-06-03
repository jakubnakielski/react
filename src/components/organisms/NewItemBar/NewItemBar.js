import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
// import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
    transform: ${({ isBarOpen }) => (isBarOpen ? 'translateX(0%)' : 'translateX(1000%)')};
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-color: white;
    padding: 40px 50px;
    border-left: 8px solid ${({ theme, activeColor }) => theme[activeColor]};
    box-shadow: 0 0px 20px -10px ${({ theme, activeColor }) => theme[activeColor]};
    transition: .5s ease-out;
`;
const StyledParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.grey300};
    font-size: ${({ theme }) => theme.fontSize.s};
`;
const StyledInput = styled(Input)`
    width: 85%;
`;
const StyledTextarea = styled(Input)`
    height: 38%;
    border-radius: 15px;
    resize: none;
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSize.m};
`;
const StyledButton = styled(Button)`
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
    margin-top: 80px;
`;

class NewItemBar extends React.Component {

    render() {
        const { pageContext, isBarOpen } = this.props;

        return (

            <StyledWrapper activeColor={pageContext}
                isBarOpen={isBarOpen}
            >
                <Heading big>Add a new note</Heading>
                <StyledParagraph>A note requires title and description</StyledParagraph>
                <StyledInput placeholder="title" />
                <StyledTextarea as='textarea' placeholder="description" />
                <StyledButton activeColor={pageContext}>add note</StyledButton>
            </StyledWrapper>
        )
    }
}

export default withContext(NewItemBar);
