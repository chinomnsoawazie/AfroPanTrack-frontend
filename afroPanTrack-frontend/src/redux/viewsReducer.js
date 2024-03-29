import {RESET_VIEWS, SET_INFECTIONS_VIEW, SET_QUARANTINE_VIEW, SET_UPDATES_VIEW, SET_HELP_REQUESTS_VIEW, SET_BARTERS_VIEW, SET_REPORT_INFECTIONS_VIEW, SET_SIGNUP_VIEW} from '../redux/actionTypes'

const initialState = {
    viewInfectionMap: false,
    viewQuarantineMap: false,
    viewCountryUpdates: false,
    viewHelpRequests: false,
    viewBarters: false,
    reportAnInfection: false,
    signUp: false,
}

const viewsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case RESET_VIEWS:
        return {
            ...state,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            viewBarters: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_QUARANTINE_VIEW:
        return {
            ...state,
            viewQuarantineMap: true,
            viewInfectionMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            viewBarters: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_INFECTIONS_VIEW:
        return {
            ...state,
            viewInfectionMap: true,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            viewBarters: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_UPDATES_VIEW:
        return {
            ...state,
            viewCountryUpdates: true,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewHelpRequests: false,
            viewBarters: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_HELP_REQUESTS_VIEW:
        return {
            ...state,
            viewHelpRequests: true,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewBarters: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_BARTERS_VIEW:
        return {
            ...state,
            viewBarters: true,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            reportAnInfection: false,
            signUp: false
        }

        case SET_REPORT_INFECTIONS_VIEW:
        return {
            ...state,
            reportAnInfection: true,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            viewBarters: false,
            signUp: false
        }

        case SET_SIGNUP_VIEW:
        return {
            ...state,
            signUp: true,
            viewInfectionMap: false,
            viewQuarantineMap: false,
            viewCountryUpdates: false,
            viewHelpRequests: false,
            viewBarters: false,
            reportAnInfection: false,
        }

        default:
        return state
    }
}

export default viewsReducer