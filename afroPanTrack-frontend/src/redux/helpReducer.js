import { SET_HELP_REQUESTS, SET_HELPERS } from '../redux/actionTypes'

const initialState = {
    allHelps: '',
    allHelpers: ''
}

const helpsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_HELP_REQUESTS:
            console.log(action.payload)
        return {
            ...state,
            allHelps: action.payload
        }


        case SET_HELPERS:
            return {
                ...state,
                allHelpers: action.payload
            }

        default:
        return state
    }
}

export default helpsReducer