import React from 'react';
import Sidebar from './Sidebar';

export default {
    title: 'Organisms/Sidebar',
};

export const Notes = () => <Sidebar pageType='note' />;
export const Twitters = () => <Sidebar pageType='twitter' />;
export const Articles = () => <Sidebar pageType='article' />;
