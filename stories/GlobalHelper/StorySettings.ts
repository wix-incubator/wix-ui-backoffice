import {StoryUrlParams} from 'wix-ui-test-utils/dist/src/protractor/';
export interface StorySettings extends StoryUrlParams {
    dataHook: string;
}

export const storySettings: StorySettings = {
    kind: 'Components',
    story: 'GlobalHelper',
    dataHook: 'story-global-helper-right'
};
