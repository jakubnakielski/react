import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
    <GridTemplate cardType="articles" itemsLength={articles.length}>
        {articles.map(item => (
            <Card
                cardType="articles"
                key={item.id}
                {...item}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);

