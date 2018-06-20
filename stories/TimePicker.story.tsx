import {TimePicker} from '../src/components/TimePicker/TimePicker';

export default {
    category: 'Components',
    name: 'TimePicker',
    storyName: 'TimePicker',
    component: TimePicker,
    componentPath: '../src/components/TimePicker/TimePicker.tsx',
    componentProps: {
        'data-hook': 'storybook-timePicker',
        error: false,
        disableAmPm: false,
    },
};
