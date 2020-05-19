import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';

const Twitters = () => (
    <UserPageTemplate pageType="twitter">
        <GridTemplate cardType="twitter" />
    </UserPageTemplate>
);

export default Twitters;