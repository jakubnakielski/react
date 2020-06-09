import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
    <GridTemplate itemsLength={articles.length}>
        {articles.map(item => (
            <Card
                key={item.id}
                {...item}
            />
        ))}
    </GridTemplate>
);
const mapStateToProps = (state) => {
    const { articles } = state;

    return {
        articles: articles,
    }
}

export default connect(mapStateToProps, null)(Articles);

















// const Articles = ({ articles }) => (
//     <GridTemplate itemsLength={articles.length}>
//         {articles.map(item => (
//             <Card
//                 key={item.id}
//                 {...item}
//             />
//         ))}
//     </GridTemplate>
// );

// const mapStateToProps = ({ articles }) => ({ articles });

// export default connect(mapStateToProps)(Articles);

