import {TimePicker} from '../src/components/TimePicker/TimePicker';
import {enumValues} from '../src/utils';
import {Size} from '../src/components/TimePicker/constants';

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
    exampleProps: {
        size: enumValues(Size),
    }
};
