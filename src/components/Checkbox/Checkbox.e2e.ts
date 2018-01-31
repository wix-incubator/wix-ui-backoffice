import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils';
import {checkboxTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import {browser} from 'protractor';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('Components', 'Checkbox');
  const dataHook = 'storybook-checkbox';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = checkboxTestkitFactory({dataHook});

    expect(driver.element()).toBeDefined();
  });

  // eyes.it('should be unchecked and not disabled by default', () => {
  //   const driver = checkboxTestkitFactory({ dataHook });

  //   // expect(driver.isChecked()).toBeFalsy();
  //   expect(driver.isDisabled()).toBeFalsy();
  // });

  // it('should be checked', () => {
  //   const driver = createDriver(<Checkbox checked />);
  //   expect(driver.isChecked()).toBeTruthy();
  // });

  // it('should be disabled', () => {
  //   const driver = createDriver(<Checkbox disabled />);
  //   expect(driver.isDisabled()).toBeTruthy();
  // });

  // it('should have an error state', () => {
  //   const driver = createDriver(<Checkbox hasError />);
  //   expect(driver.hasError()).toBeTruthy();
  // });

  // it('should have a label', () => {
  //   const driver = createDriver(<Checkbox disabled > Hey < /Checkbox>);
  //   expect(driver.getLabel()).toBe('Hey');
  // });

  // it('should call onChange when clicking the Checkbox', () => {
  //   const onChange = jest.fn();

  //   const driver = createDriver(<Checkbox onChange={ onChange } />);

  //   driver.click();
  //   expect(onChange).toBeCalled();
  // });

  // it('should not call onChange when clicking disabled Checkbox', () => {
  //   const onChange = jest.fn();

  //   const driver = createDriver(<Checkbox onChange={ onChange } disabled />);

  //   driver.click();
  //   expect(onChange).not.toBeCalled();
  // });

  // it('should not run in indeterminate mode when not specified', () => {
  //   const driver = createDriver(<Checkbox/>);

  //   expect(driver.isIndeterminate()).toBeFalsy();
  // });

  // it('should run in indeterminate mode when specified', () => {
  //   const driver = createDriver(<Checkbox indeterminate />);

  //   expect(driver.isIndeterminate()).toBeTruthy();
  // });
});
