import * as React from 'react';
import HBoxComponent, {HBoxProps} from './HBox';
import {styles} from './styles';
import {withClasses} from 'wix-ui-jss';
import {ThemedComponentProps} from 'wix-ui-jss';
import {WixComponentProps} from 'wix-ui-core/dist/src/createHOC';

export {HBoxProps};
export const HBox = withClasses(HBoxComponent, styles) as React.ComponentClass<HBoxProps & ThemedComponentProps & WixComponentProps>;
