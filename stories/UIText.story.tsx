import {UIText} from '../src/components/StylableUIText';

export default {
  category: 'Internal',
  storyName: 'UIText',
  displayName: 'UIText',
  component: UIText,
  componentPath: '../src/components/StylableUIText/UIText.tsx',

  componentProps: {
    'data-hook': 'storybook-uiText',
    appearance: 'T1.1',
    children: 'Some text'
  }
};
