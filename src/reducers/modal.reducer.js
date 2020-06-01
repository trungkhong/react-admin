import { modalConstants } from "../constants/modal.constants";

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}

export function modal(state = initialState, action) {
    console.log("state", state)
    switch (action.type) {
        case modalConstants.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case modalConstants.CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}