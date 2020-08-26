import { RefObject } from 'react';

export type Line = {
    position: number;
    lineRef: RefObject<HTMLDivElement>;
    direction: 'Down' | 'Up';
    height: number;
};

export const lineActions = {
    updateHeight: 'setHeight',
    updatePosition: 'updatePosition',
    updateRef: 'updateRef',
    setLines: 'setLines'
};

export type lineReducerInput = {
    type: string;
    index: number;
    height?: number;
    newLines?: Line[];
    lineRef?: RefObject<HTMLDivElement>;
    position?: number;
};

export const lineReducer: React.Reducer<Line[], lineReducerInput> = (state, action) => {
    const { type, index } = action;
    switch (type) {
        case lineActions.setLines: {
            return action.newLines;
        }
        case lineActions.updateHeight: {
            return Object.assign([], state, {
                [index]: { ...state[index], height: action.height }
            });
        }
        case lineActions.updateRef: {
            return Object.assign([], state, {
                [index]: { ...state[index], lineRef: action.lineRef }
            });
        }
        case lineActions.updatePosition: {
            return Object.assign([], state, {
                [index]: {
                    ...state[index],
                    position: Math.max(
                        Math.min(
                            state[index].position + (action.position as number),
                            state[index].height
                        ),
                        0
                    )
                }
            });
        }
        default: {
            return state;
        }
    }
};
