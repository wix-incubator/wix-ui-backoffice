import {Input} from '../src/components/Input';

export default {
  category: 'Components',
  storyName: 'Input',
  component: Input,
  componentPath: '../src/components/Input/Input.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-input',
    value: '',
    onChange: event => setState({value: event.target.value})
  }),

  exampleProps: {
    onClick: () => 'Triggered onClick',
    onChange: () => 'Triggered onChange',
    onDoubleClick: () => 'Triggered onDoubleClick',
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onKeyDown: () => 'Triggered onKeyDown',
    onKeyUp: () => 'Triggered onKeyUp'
  }
};
