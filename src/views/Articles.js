import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';

const Articles = () => (
    <UserPageTemplate pageType="article">
        <GridTemplate cardType="article" />
    </UserPageTemplate>
);

export default Articles;

