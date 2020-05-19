import React from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

class NotFoundPage extends React.Component {
    state = {
        redirect: false,
    }

    componentDidMount() {
        this.id = setTimeout(() => {
            this.setState({ redirect: true })
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        const { redirect } = this.state;
        return (
            <>
                <h1>Page not found!</h1>
                <p>Redirecting in a few seconds ...</p>
                {redirect && <Redirect to={routes.home} />}
            </>
        )
    }
}

export default NotFoundPage;