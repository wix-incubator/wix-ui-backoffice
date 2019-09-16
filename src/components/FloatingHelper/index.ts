import {createHOC} from 'wix-ui-core/dist/standalone/src/createHOC';
import {FloatingHelper as FLoatingHelperRaw} from './FloatingHelper';
export * from './FloatingHelper';
export const FloatingHelper = createHOC(FLoatingHelperRaw);

export * from './constants';