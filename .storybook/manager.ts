import { create } from 'storybook/theming';
import { addons } from 'storybook/manager-api';

const theme =  create({
    base: 'light',
    brandTitle: 'Balanced UI',
});

addons.setConfig({
    theme: theme,
});