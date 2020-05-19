import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';

const NotesView = () => (
    <UserPageTemplate pageType="note">
        <GridTemplate cardType="note" />
    </UserPageTemplate>
);

export default NotesView;

