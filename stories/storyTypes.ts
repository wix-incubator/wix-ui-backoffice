import { StoryUrlParams } from 'wix-ui-test-utils/dist/src/protractor/';

export interface StorySettings extends StoryUrlParams {
  kind: 'Internal' | 'Components';
  dataHook: string;
  exampleDataHooks?: string[];
}
