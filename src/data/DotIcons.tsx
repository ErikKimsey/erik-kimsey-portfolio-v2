import React from 'react';
import { render } from 'react-dom';
import { faUserAstronaut, faLaptopCode, faFilePdf, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';

const DOT_ICON_CONTENT = [
    {
        iconType: 'fas',
        iconName: faHome,
    },
    {
        iconType: 'fas',
        iconName: faLaptopCode,
        routeName: 'portfolio',
    },
    {
        iconType: 'fas',
        iconName: faUserAstronaut,
    },
    {
        iconType: 'fas',
        iconName: faFilePdf,
    },
    {
        iconType: 'fas',
        iconName: faPhone,
    },
];

export default DOT_ICON_CONTENT;
