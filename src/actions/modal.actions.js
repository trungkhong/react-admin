import { modalConstants } from '../constants';

export const showModal = ({ modalProps, modalType }) => dispatch => {
    console.log(modalType)
    dispatch({
        type: modalConstants.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: modalConstants.CLOSE_MODAL
    })
}

// function show(message) {
//     return { type: modalActions.SHOW_MODAL, message };
// }

// function close(message) {
//     return { type: modalActions.CLOSE_MODAL, message };
// }

// function update() {
//     return { type: modalActions.UPDATE_MODAL };
// }