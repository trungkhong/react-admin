import { scoopConstants } from "../constants/scoop.constants";

export function scoops(state = {
    ...state,
    scoops: []
}, action) {
    switch (action.type) {
        case scoopConstants.GETALL_REQUEST:
            return {
                ...state,
                scoops: action.payload
            }
        case scoopConstants.DELETE_REQUEST:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}