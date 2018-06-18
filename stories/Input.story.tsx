import {Input} from '../src/components/Input';

export default {
  category: 'Components',
  storyName: 'Input',
  component: Input,
  componentPath: '../src/components/Input/Input.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-input',
    value: 'Hello, World',
    placeholder: 'Greetings',
    error: false,
    onChange: event => setState({value: event.target.value})
  }),

  exampleProps: {
    prefix: ['Mrs.', 'Mr.', 'Prince'],
    suffix: ['$', '€'],
    onClick: () => 'Triggered onClick',
    onChange: () => 'Triggered onChange',
    onDoubleClick: () => 'Triggered onDoubleClick',
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onKeyDown: () => 'Triggered onKeyDown',
    onKeyUp: () => 'Triggered onKeyUp'
  }
};
