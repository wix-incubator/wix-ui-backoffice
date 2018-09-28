import * as React from 'react';
import { Pagination } from './';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { paginationTestkitFactory } from '../../testkit';
import { paginationTestkitFactory as enzymePaginationTestkitFactory } from '../../testkit/enzyme';

describe('Pagination', () => {
  const getComponent = ({ totalPages = 1, ...rest } = {}) => (
    <Pagination {...{ totalPages, ...rest }} />
  );

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(getComponent(), paginationTestkitFactory)).toBe(
        true
      );
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          getComponent(),
          enzymePaginationTestkitFactory,
          mount
        )
      ).toBe(true);
    });
  });
});
