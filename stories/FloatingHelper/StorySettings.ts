import {StoryUrlParams} from 'wix-ui-test-utils/dist/src/protractor/';

export interface ExamplesSettings<T> {
    [key: string]: ExampleSettings<T>;
}

export interface ExampleSettings<T> {
    dataHook: string;
    params: T;
}

export interface ExampleParams {
    text: string;
}

export interface StorySettings<T> extends StoryUrlParams {
    dataHook: string;
    examples: ExamplesSettings<T>;
}

export const storySettings: StorySettings<ExampleParams> = {
    kind: 'Components',
    story: 'FloatingHelper',
    dataHook: 'story-floating-helper-right',
    examples: {
        textOnly: {
            dataHook: 'story-floating-helper-text-only',
            params: {
                text: 'There should not be a title in this helper'
            }
        },
    }
};
