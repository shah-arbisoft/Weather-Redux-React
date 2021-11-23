
import { ActionTypes } from "../constants/actions-types"

export const setText = (text) => {
    return {
        type: ActionTypes.SET_TEXT,
        payload: text,
    }
}


export const makeApiCall = (isCallable) => {
    return {
        type: ActionTypes.MAKE_API_CALL,
        payload: isCallable,
    }
}

export const setCityObject = (cityObject) => {
    return {
        type: ActionTypes.SET_CITY_OBJECT,
        payload: cityObject,
    }
}

export const unSetCityObject = (cityObject) => {
    return {
        type: ActionTypes.UNSET_CITY_OBJECT,
        payload: cityObject,
    }
}

export const moveToTop = (cityObject) => {
    return {
        type: ActionTypes.MOVE_TO_TOP,
        payload: cityObject,
    }
}