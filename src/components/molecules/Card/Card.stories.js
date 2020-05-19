import React from 'react';
import Card from './Card';

export default { title: 'Molecules/Card' };

export const Primary = () => <Card />;
export const Secondary = () => <Card cardType="twitter" />;
export const Tertiary = () => <Card cardType="article" />;
