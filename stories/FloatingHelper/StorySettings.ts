import {StoryUrlParams} from 'wix-ui-test-utils/dist/src/protractor/';
export interface StorySettings extends StoryUrlParams {
    dataHook: string;
}

export const storySettings: StorySettings = {
    kind: 'Components',
    story: '8.6a FloatingHelper',
    dataHook: 'story-floating-helper-right'
};
