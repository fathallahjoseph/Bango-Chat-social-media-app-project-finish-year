import contactReducer from './contactReducer'


import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    contact:contactReducer
})
export default rootReducer;