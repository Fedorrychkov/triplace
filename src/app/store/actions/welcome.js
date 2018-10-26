import { SHOW_WELCOME, HIDE_WELCOME } from '../actionTypes';

export function welcomeUpdaterAction(state: string) {
    switch (state) {
        case SHOW_WELCOME:
            return { type: HIDE_WELCOME };
        case HIDE_WELCOME:
            return { type: SHOW_WELCOME };
        default:
            return { type: SHOW_WELCOME };
    }
}
