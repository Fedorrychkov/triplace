import { HEADER_OPEN, HEADER_CLOSE } from '../actionTypes';

export function headerUpdaterAction(state: string) {
    switch (state) {
        case HEADER_OPEN:
            return { type: HEADER_CLOSE };
        case HEADER_CLOSE:
            return { type: HEADER_OPEN };
        default:
            return { type: HEADER_CLOSE };
    }
}
