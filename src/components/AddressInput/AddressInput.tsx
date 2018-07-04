import * as React from 'react';
import {bool, oneOf, ValidationMap} from 'prop-types';
import {AddressInput as CoreAddressInput, AddressInputProps as CoreAddressInputProps} from 'wix-ui-core/AddressInput';
import style from './AddressInput.st.css';
import Location from 'wix-ui-icons-common/Location';
import omit = require('lodash/omit');
import {Omit} from '../../types/common';
import Search from 'wix-ui-icons-common/Search';

const THROTTLE_INTERVAL = 150;

const excludePropsArray = ['forceContentElementVisibility', 'forceOptions', 'throttleInterval', 'locationIcon'];
export type excludeProps = 'forceContentElementVisibility' | 'forceOptions' | 'throttleInterval' | 'locationIcon';

export interface AddressInputProps extends Omit<CoreAddressInputProps, excludeProps> {
    size?: 'large' | 'medium' | 'small';
    showLocationIcon?: boolean;
    magnifyingGlass?: boolean;
}


export const AddressInput: React.SFC<AddressInputProps> = props => {
    const {size, showLocationIcon, magnifyingGlass, ...rest} = props;
    return (
        <CoreAddressInput
            {...rest}
            {...style('root', {size}, rest)}
            forceContentElementVisibility={false}
            forceOptions={null}
            throttleInterval={THROTTLE_INTERVAL}
            locationIcon={showLocationIcon && <Location/>}
            suffix={magnifyingGlass && <Search className={style.search}/>}
        />
    );
};

AddressInput.displayName = 'AddressInput';

AddressInput.propTypes = {
    ...omit<ValidationMap<AddressInputProps>>(CoreAddressInput.propTypes, excludePropsArray),
    size: oneOf(['large', 'medium', 'small']),
    showLocationIcon: bool,
    magnifyingGlass: bool
};

AddressInput.defaultProps = {
    size: 'medium',
    magnifyingGlass: true
};
