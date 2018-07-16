import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {fullTextViewDriverFactory} from './FullTextView.driver';
import {FullTextView} from './FullTextView';

import {fullTextViewTestkitFactory} from '../../testkit';
import {fullTextViewTestkitFactory as enzymeFullTextViewTestkitFactory} from '../../testkit/enzyme';

describe('FullTextView', () => {
  const createDriver = createDriverFactory(fullTextViewDriverFactory);

  it('should render a span tag by default', () => {
    const wrapper = createDriver(<FullTextView>Hello World</FullTextView>);
    expect(wrapper.getTagName()).toBe('span');
  });

  it('should display full content on hover and hide it on leave in tooltip', async () => {
    const content = (
      <div>
        <span>Delete this super awesome thing</span>
        <i>?</i>
      </div>
    );
    const component = mount(<FullTextView maxWidth={0}>{content}</FullTextView>);

    expect(component.find('[data-hook="popover-content"]').length).toBe(0);
    component.setState({isEllipsisActive: true});
    component.simulate('mouseEnter');
    expect(component.find('[data-hook="popover-content"]').at(0).text()).toBe('Delete this super awesome thing?');
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<FullTextView>Hello World</FullTextView>, fullTextViewTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<FullTextView>Hello World</FullTextView>, enzymeFullTextViewTestkitFactory, mount)).toBe(true);
    });
  });
});
