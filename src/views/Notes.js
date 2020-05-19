import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import NewItemModal from 'components/organisms/NewItemModal/NewItemModal';

const NotesView = () => (
    <UserPageTemplate pageType="note">
        <NewItemModal />
        <GridTemplate cardType="note" />
    </UserPageTemplate>
);

export default NotesView;

