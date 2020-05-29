import { SET_REPORTS, SET_CURRENT_COUNTRY_CENTER, SET_APP_USER_LOCATION, SET_APP_USER_COORDINATES } from '../redux/actionTypes'

const initialState = {
    allReports: '',
}

const reportReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_REPORTS:
            console.log(action.payload)
        return {
            ...state,
            allReports: action.payload
        }

        default:
        return state
    }
}

export default reportReducer