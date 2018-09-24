import * as React from 'react';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import { Pagination } from '../../src/components/Pagination';
import { storySettings } from './storySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: Pagination,
  componentPath: '../../src/components/Pagination/Pagination.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    totalPages: 150,
    currentPage: 118,
    maxPagesToShow: 9,
    showFirstPage: true,
    showLastPage: true,
    responsive: false,
    showFirstLastNavButtons: false,
    paginationMode: 'pages',
    showInputModeTotalPages: false,
    disabled: false,
    previousLabel: <ChevronLeft />,
    nextLabel: <ChevronRight />
  }
};
