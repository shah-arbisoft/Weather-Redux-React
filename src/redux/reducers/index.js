import {combineReducers} from 'redux';
import { textReducer, cityObjectReducer, ApiReducer } from './textReducer';

const reducers = combineReducers({
    searchCity: textReducer,
    apiCallable: ApiReducer,
    allCities: cityObjectReducer,

})

export default reducers;