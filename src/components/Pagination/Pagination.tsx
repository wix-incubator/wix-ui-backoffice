import * as React from 'react';
import {
  Pagination as CorePagination,
  PaginationProps
} from 'wix-ui-core/Pagination';

import style from './Pagination.st.css';

export type PaginationProps = PaginationProps;

export const Pagination: React.SFC<PaginationProps> = props => (
  <CorePagination {...props} {...style('root', {}, props)} />
);

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {};
Pagination.propTypes = CorePagination.propTypes;
