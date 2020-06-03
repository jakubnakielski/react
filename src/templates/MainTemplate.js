import React from 'react';
import { withRouter } from 'react-router-dom';
import PageContext from 'context';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends React.Component {
    state = {
        pageType: 'notes',
    }
    componentDidMount() {
        this.setPageType();
    }
    componentDidUpdate(prevProps, prevState) {
        this.setPageType(prevState);
    }

    setPageType(prevState = '') {
        const pageTypes = ['notes', 'twitters', 'articles'];
        const { location: { pathname } } = this.props;

        const [currentPage] = pageTypes.filter(page => pathname.includes(page));

        if (prevState.pageType === currentPage) return;
        else this.setState({ pageType: currentPage });
    }

    render() {
        const { children } = this.props;
        const { pageType } = this.state;

        return (
            <PageContext.Provider value={pageType}>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </PageContext.Provider>
        )
    }
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
}

MainTemplate.defaultProps = {
    pageContext: 'notes',
}

export default withRouter(MainTemplate);
