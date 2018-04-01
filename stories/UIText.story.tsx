import {UIText} from '../src/components/StylableUIText';
import * as UITextSource from '!raw-loader!../src/components/StylableUIText/UIText.tsx';

export default {
  category: 'Internal Components',
  storyName: 'UIText',
  name: 'UIText',
  component: UIText,
  source: UITextSource,
  componentPath: '../src/components/StylableUIText/UIText.tsx',
  componentProps: setState => ({
    dataHook: 'storybook-uiText',
    appearance: 'T1.1',
    children: 'Some text'
  })
};
