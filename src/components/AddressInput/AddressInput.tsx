import * as React from 'react';
import {AddressInput as CoreAddressInput, AddressInputProps as CoreAddressInputProps} from 'wix-ui-core/AddressInput';
import style from './AddressInput.st.css';
import Location from 'wix-ui-icons-common/Location';
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


export class AddressInput extends React.PureComponent<AddressInputProps> {
    static displayName = 'AddressInput';
    addressInputRef;
    static bypassDefaultPropsTypecheck
    static defaultProps = {
        size: 'medium',
        magnifyingGlass: true
    };

    focus() {
        this.addressInputRef.focus();
    }

    blur() {
        this.addressInputRef.blur();
    }

    render() {
        const {size, showLocationIcon, magnifyingGlass, ...rest} = this.props;
        return (
            <CoreAddressInput
                {...rest}
                {...style('root', {size}, rest)}
                forceContentElementVisibility={false}
                forceOptions={null}
                throttleInterval={THROTTLE_INTERVAL}
                locationIcon={showLocationIcon && <Location/>}
                suffix={magnifyingGlass ? <Search className={style.search}/> : undefined}
                ref={ref => this.addressInputRef = ref}
            />
        );
    }
}
