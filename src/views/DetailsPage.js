import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';
import { routes } from "routes";

class DetailsPage extends React.Component {
    state = {
        pageType: 'notes',
    }

    componentDidMount = () => {
        const { match } = this.props;

        switch (match.path) {
            case routes.note: this.setState({ pageType: 'notes' });
                break;
            case routes.twitter: this.setState({ pageType: 'twitters' });
                break;
            case routes.article: this.setState({ pageType: 'articles' });
                break;
            default: throw new Error('Something went wrong with matching paths')
        }
    }

    render() {
        const dummyArticle = {
            id: 1,
            title: 'Wake me up when Vue ends',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto exercitationem porro magni dolore repellendus borem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto exercitationem porro magni dolore repellendus',
            twitterName: 'hello_roman',
            articleUrl: 'https://youtube.com/helloroman',
            created: '1 day',
        }

        const { pageType } = this.state;

        return (
            <UserPageTemplate pageType={pageType}>
                <DetailsTemplate
                    pageType={pageType}
                    title={dummyArticle.title}
                    content={dummyArticle.content}
                    twitterName={dummyArticle.twitterName}
                    created={dummyArticle.created}
                />
            </UserPageTemplate>
        )
    }
}

export default DetailsPage;

