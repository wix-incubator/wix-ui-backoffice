import {createHOC} from 'wix-ui-core/dist/src/createHOC';
import {FloatingHelper as FLoatingHelperRaw} from './FloatingHelper';
export * from './FloatingHelper';
export const FloatingHelper = createHOC(FLoatingHelperRaw);

export * from './constants';