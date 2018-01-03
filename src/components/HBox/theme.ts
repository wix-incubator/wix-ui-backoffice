import {Alignment} from './constants';

export const theme: Function = ({spacing, verticalAlignment}: { spacing: string, verticalAlignment: Alignment }) => ({
    spacing,
    verticalAlignment
});
