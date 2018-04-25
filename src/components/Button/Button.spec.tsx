import * as React from 'react';
import {Button} from './';
import {buttonTestkitFactory} from '../../testkit';
import {buttonTestkitFactory as enzymeButtonTestkitFactory} from '../../testkit/enzyme';
import {runTestkitExistsSuite} from '../../common/TestkitTests';

describe('Button', () => {

  runTestkitExistsSuite({
    Element: <Button/>,
    testkitFactory: buttonTestkitFactory,
    enzymeTestkitFactory: enzymeButtonTestkitFactory
  });
});
