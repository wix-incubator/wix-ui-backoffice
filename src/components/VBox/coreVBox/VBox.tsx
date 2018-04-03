import * as React from 'react';
import {createHOC} from 'wix-ui-core/dist/src/createHOC';

export interface VBoxProps {
  children: any;
  classes?: {
    vRoot: string
  };
}

const VBox: React.SFC<VBoxProps> = ({children, classes}) => (
  <div className={classes.vRoot}>{children}</div>
);

export default createHOC(VBox);
