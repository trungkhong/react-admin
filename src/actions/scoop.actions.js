import { scoopConstants } from "../constants/scoop.constants";
import apiCaller from './../utils/apiCaller';


// export const getAllOfUser = (userId, type) => {
//     var scoops = scoopServices.getAllScoopsOfUser(userId, type)
//     console.log("action scoops:", scoops)
//     return {
//         type: scoopConstants.GETALL_SUCCESS,
//         scoops
//     }
//     // return dispatch => {
//     //     dispatch(request());
//     //     scoopServices.getAllScoopsOfUser(userId, type)
//     //     .then(
//     //         scoops => dispatch(success(scoops)),
//     //         error => dispatch(failure(error.toString()))
//     //     );
//     // };
//     // function request() { return { type: scoopConstants.GETALL_REQUEST } }
//     // function success(scoops) { return { type: scoopConstants.GETALL_SUCCESS, scoops } }
//     // function failure(error) { return { type: scoopConstants.GETALL_FAILURE, error } }
// }

export const getAllScoopsOfUser = (activePage, filterType) => {
    return (dispatch) => {
        return apiCaller(`scoops?page=${activePage}&size=12&filterType=${filterType}`, 'GET', null, true).then(res => {
            dispatch(actGetAllOfScoops(res.data))
        })
    }
}

export const deleteScoop = (scoopID) => {
    console.log("deleteScoop")
    return (dispatch) => {
        return apiCaller(`scoops?scoopID=${scoopID}`, 'DELETE', null, true).then(res => {
            dispatch(deleteScoopAct(res.data))
        })
    }
}

export const updateScoopCaption = (scoopID) => {
    console.log("updateScoopCaption")
    return (dispatch) => {
        return apiCaller(`scoops/update-caption`, 'PUT', { caption: "tesst caption update", scooop_id: scoopID }, true).then(res => {
            dispatch(updateScoopAct(res.data))
        })
    }
}


export const actGetAllOfScoops = (scoops) => {
    return {
        type: scoopConstants.GETALL_REQUEST,
        payload: scoops
    }
}

export const deleteScoopAct = (result) => {
    return {
        type: scoopConstants.DELETE_REQUEST,
        payload: result
    }
}

export const updateScoopAct = (result) => {
    return {
        type: scoopConstants.UPDATE_REQUEST,
        payload: result
    }
}