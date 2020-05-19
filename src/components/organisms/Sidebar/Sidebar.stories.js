import React from 'react';
import Sidebar from './Sidebar';

export default {
    title: 'Organisms/Sidebar',
};

export const Notes = () => <Sidebar pageType='notes' />;
export const Twitters = () => <Sidebar pageType='twitters' />;
export const Articles = () => <Sidebar pageType='articles' />;
