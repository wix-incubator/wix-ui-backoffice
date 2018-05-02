import {StoryUrlParams} from 'wix-ui-test-utils/dist/src/protractor/';

export interface StorySettings extends StoryUrlParams {
    dataHook: string;
    exampleDataHooks: string[];
}

export const storySettings: StorySettings = {
    kind: 'Components',
    story: 'FloatingHelper',
    dataHook: 'story-floating-helper-right',
    exampleDataHooks: [
        'example-title',
        'example-body',
        'example-title-body',
        'example-title-body-action',
        'example-title-action',
        'example-body-action',
    ]
};
