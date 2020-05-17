import {RESET_VIEWS, SET_INFECTIONS_VIEW, SET_QUARANTINE_VIEW  } from '../redux/actionTypes'

const initialState = {
    viewInfectionMap: false,
    viewQuarantineMap: false
}

const viewsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case RESET_VIEWS:
            console.log("resetting views")
        return {
            ...state,
            viewInfectionMap: false,
            viewQuarantineMap: false
        }

        case SET_QUARANTINE_VIEW:
            console.log("setting quarantine view")
        return {
            ...state,
            viewQuarantineMap: true,
            viewInfectionMap: false
        }

        case SET_INFECTIONS_VIEW:
            console.log("setting infections view")
        return {
            ...state,
            viewInfectionMap: true,
            viewQuarantineMap: false
        }

        default:
        return state
    }
}

export default viewsReducer