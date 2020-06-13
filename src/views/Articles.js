import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = () => (
    <GridTemplate itemsLength={0}>
        {articles.map(item => (
            <Card
                key={item.id}
                {...item}
            />
        ))}
    </GridTemplate>
);

export default Articles;





















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

