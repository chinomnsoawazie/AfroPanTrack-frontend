import { SET_REPORTS, SET_CURRENT_COUNTRY_CENTER, SET_APP_USER_LOCATION, SET_APP_USER_COORDINATES } from '../redux/actionTypes'

const initialState = {
    allReports: '',
    currentCountryCenter: {},
    appUserLocation: {},
    appUserCoordinates: ''
}

const reportReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_REPORTS:
            console.log(action.payload)
        return {
            ...state,
            allReports: action.payload
        }

        case SET_CURRENT_COUNTRY_CENTER:
        return {
            ...state,
            currentCountryCenter: action.payload
        }

        case SET_APP_USER_LOCATION:
        return {
            ...state,
            appUserLocation: action.payload
        }

        case SET_APP_USER_COORDINATES:
        return {
            ...state,
            appUserCoordinates: action.payload
        }

        default:
        return state
    }
}

export default reportReducer