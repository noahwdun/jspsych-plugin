import { JsPsychPlugin, ParameterType, JsPsych, TrialType } from 'jspsych';

declare const info: {
    readonly name: "plugin-moving-dots-2";
    readonly version: string;
    readonly parameters: {
        /** Array of control change levels (e.g., 30%, 70%, 100%) */
        readonly control_levels: {
            readonly type: ParameterType.INT;
            readonly array: true;
            readonly default: readonly [30, 70, 100];
        };
        /** Number of dots to display on the screen */
        readonly dot_count: {
            readonly type: ParameterType.INT;
            readonly default: 10;
        };
        /** Duration of the flash in milliseconds */
        readonly flash_duration: {
            readonly type: ParameterType.INT;
            readonly default: 200;
        };
        /** Total duration of the trial in milliseconds */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly default: 5000;
        };
        /** Initial level of control the mouse has over the dots (0-100) */
        readonly initial_control_level: {
            readonly type: ParameterType.INT;
            readonly default: 100;
        };
        /** Change in the level of control of the flashing dot after it changes (0-100) */
        readonly control_change_level: {
            readonly type: ParameterType.INT;
            readonly default: 30;
        };
        /** 2-dimensional array of mouse data for playback */
        readonly playback: {
            readonly type: ParameterType.OBJECT;
            readonly array: true;
            readonly default: Array<{
                dx: number;
                dy: number;
                t: number;
            }>;
        };
    };
    readonly data: {
        /** Magnitude of the control change (e.g., 30, 70, 100) */
        readonly control_change: {
            readonly type: ParameterType.INT;
        };
    };
    readonly citations: "__CITATIONS__";
};
type Info = typeof info;
/**
 * **plugin-moving-dots-2**
 *
 * Handles moving series of dots that move at the same speed in response to user input; one dot will flash red and change control level. Implemented as part of an experiment for COGS-219; replicating the paper "Control Changes the Way We Look at the World" by Wen & Haggard.
 *
 * @author Ollie & Noah
 * @see {@link /plugin-moving-dots-2/README.md}
 */
declare class MovingDots2Plugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "plugin-moving-dots-2";
        readonly version: string;
        readonly parameters: {
            /** Array of control change levels (e.g., 30%, 70%, 100%) */
            readonly control_levels: {
                readonly type: ParameterType.INT;
                readonly array: true;
                readonly default: readonly [30, 70, 100];
            };
            /** Number of dots to display on the screen */
            readonly dot_count: {
                readonly type: ParameterType.INT;
                readonly default: 10;
            };
            /** Duration of the flash in milliseconds */
            readonly flash_duration: {
                readonly type: ParameterType.INT;
                readonly default: 200;
            };
            /** Total duration of the trial in milliseconds */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly default: 5000;
            };
            /** Initial level of control the mouse has over the dots (0-100) */
            readonly initial_control_level: {
                readonly type: ParameterType.INT;
                readonly default: 100;
            };
            /** Change in the level of control of the flashing dot after it changes (0-100) */
            readonly control_change_level: {
                readonly type: ParameterType.INT;
                readonly default: 30;
            };
            /** 2-dimensional array of mouse data for playback */
            readonly playback: {
                readonly type: ParameterType.OBJECT;
                readonly array: true;
                readonly default: Array<{
                    dx: number;
                    dy: number;
                    t: number;
                }>;
            };
        };
        readonly data: {
            /** Magnitude of the control change (e.g., 30, 70, 100) */
            readonly control_change: {
                readonly type: ParameterType.INT;
            };
        };
        readonly citations: "__CITATIONS__";
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}

export { MovingDots2Plugin as default };
