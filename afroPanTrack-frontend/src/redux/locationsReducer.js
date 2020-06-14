import {SET_CURRENT_COUNTRY, RESET_LOCATION_PARAMS, SET_CURRENT_COUNTRY_CENTER, SET_APP_USER_LOCATION, SET_APP_USER_COORDINATES, SET_USER_COUNTRY, SET_CURRENT_COUNTRY_ID, SET_CURRENT_STATE_ID, SET_CURRENT_CITY_ID  } from '../redux/actionTypes'

const initialState = {
    SelectedCountry: '',
    currentCountryCenter: '',
    appUserCoordinates: '',
    appUserLocation: '',
    loggedInUserCountry: '',
    currentCountryID: '',
    currentCityID: '',
    currentStateID: '',
}

const locationsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case RESET_LOCATION_PARAMS:
            console.log("resetting location params")
        return {
            ...state,
            SelectedCountry: '',
            currentCountryCenter: '',
            appUserCoordinates: '',
            appUserLocation: '',
            loggedInUserCountry: '',
            currentCountryID: '',
            currentCityID: '',
            currentStateID: '',
        }

        case SET_CURRENT_COUNTRY:
        return {
            ...state,
            SelectedCountry: action.payload
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

        case SET_USER_COUNTRY:
        return {
            ...state,
            loggedInUserCountry: action.payload
        }

        case SET_CURRENT_COUNTRY_ID:
        return {
            ...state,
            currentCountryID: action.payload
        }

        case SET_CURRENT_STATE_ID:
            console.log('setting stateID')
        return {
            ...state,
            currentStateID: action.payload
        }

        case SET_CURRENT_CITY_ID:
        return {
            ...state,
            currentCityID: action.payload
        }

        default:
        return state
    }
}

export default locationsReducer