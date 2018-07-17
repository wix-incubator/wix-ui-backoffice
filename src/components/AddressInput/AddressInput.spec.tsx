import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {addressInputDriverFactory} from './AddressInput.driver';
import {AddressInput} from '.';
import {mount} from 'enzyme';
import {GoogleMapsClientStub} from 'wix-ui-core/dist/src/components/AddressInput/GoogleMapsClientStub';
import * as helper from 'wix-ui-core/dist/src/components/AddressInput/AddressInputTestHelper';
import * as waitForCond from 'wait-for-cond';
import {AddressInputProps} from './AddressInput';
import Search from 'wix-ui-icons-common/Search'

GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);

const commonProps = {
    apiKey: '',
    Client: GoogleMapsClientStub,
    lang: 'ru',
    onSelect: () => null
};

describe('AddressInput', () => {
    const createDriver = createDriverFactory(addressInputDriverFactory);

    it('should always set the core prop forceContentElementVisibility to false', () => {
        const props = {...commonProps, forceContentElementVisibility: true} as AddressInputProps;
        const driver = createDriver(<AddressInput {...props}/>);
        expect(driver.isContentElementExists()).toBeFalsy();
    });

    it('should always set the core prop forceOptions to null', () => {
        const forceOptions = [{place_id: 0, id: 0, description: 'Hello World'}];
        const props = {...commonProps, forceOptions} as AddressInputProps;
        const driver = createDriver(<AddressInput {...props}/>);
        driver.click();
        expect(driver.isContentElementExists()).toBeFalsy();
    });

    it('should always set the core props throttleInterval value to 150', async () => {
        const props = {...commonProps, throttleInterval: 1000} as AddressInputProps;
        const wrapper = mount(<AddressInput {...props}/>);
        const coreAddressInput = wrapper.children().find('AddressInput');
        const throttleInterval = coreAddressInput.prop('throttleInterval');
        expect(throttleInterval).toBe(150);
    });

    it('Should have a focus and blur method', () => {
        const wrapper = mount(<AddressInput {...commonProps}/>);

        const input = wrapper.find('input').getDOMNode();
        const instance = wrapper.instance() as AddressInput;

        expect(document.activeElement).not.toBe(input);
        instance.focus();
        expect(document.activeElement).toBe(input);
        instance.blur();
        expect(document.activeElement).not.toBe(input);
    });

    describe('locationIcon', () => {
        it('should use LocationIcon when showLocationIcon=true', async () => {
            const driver = createDriver(<AddressInput {...commonProps} showLocationIcon/>);
            driver.click();
            driver.setValue('n');
            await waitForCond(() => driver.isContentElementExists());
            expect(driver.getContentElement().querySelector('[data-hook="location-icon-wrapper"]')).toBeTruthy();
        });

        it('should NOT use LocationIcon when showLocationIcon=false', async () => {
            const driver = createDriver(<AddressInput {...commonProps} showLocationIcon={false}/>);
            driver.click();
            driver.setValue('n');
            await waitForCond(() => driver.isContentElementExists());
            expect(driver.getContentElement().querySelector('[data-hook="location-icon-wrapper"]')).toBeFalsy();
        });

        it('should never pass through the core prop locationIcon', () => {
            const props = {...commonProps, locationIcon: <div/>} as AddressInputProps;
            const wrapper = mount(<AddressInput {...props}/>);
            const coreAddressInput = wrapper.children().find('AddressInput');
            const locationIcon = coreAddressInput.prop('locationIcon');
            expect(locationIcon).toBeFalsy();
        });
    });

    describe('magnifyingGlass', () => {
        it('should display magnifying glass icon by default', () => {
            const wrapper = mount(<AddressInput {...commonProps}/>);
            expect(wrapper.find(Search).exists()).toBeTruthy();
        });

        it('should NOT display magnifying glass when magnifyingGlass is false', () => {
            const wrapper = mount(<AddressInput {...commonProps} magnifyingGlass={false}/>);
            expect(wrapper.find(Search).exists()).toBeFalsy();
        });
    });
});
