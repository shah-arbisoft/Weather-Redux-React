import { ActionTypes } from "../constants/actions-types"

const initialState = {
    text: ""
}

const cityObjectInitialState = {
    cityObjects: []
}

export const textReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_TEXT:
            return {
                ...state,
                text: payload
            };
        default:
            return state;
    }
}

export const ApiReducer = (state={check: false}, {type, payload}) => {
    switch(type){
        case ActionTypes.MAKE_API_CALL:
            return {
                ...state,
                check: payload
            };
        default:
            return state;
    }
}




const removeCity = (cityList, cityObject) => {
    return cityList.filter((city) => city !== cityObject)
}

export const cityObjectReducer = (state=cityObjectInitialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_CITY_OBJECT:
            return {
                ...state,
                cityObjects: [payload, ...state.cityObjects]
            };

        case ActionTypes.UNSET_CITY_OBJECT:
            return {
                ...state,
                cityObjects: removeCity(state.cityObjects, payload)
            };

        case ActionTypes.MOVE_TO_TOP:
            console.log(payload)
            const newArr = removeCity(state.cityObjects, payload)
            console.log(newArr)
            return {
                ...state,
                cityObjects: [payload, ...newArr]
            };

        default:
            return state;
    }
}