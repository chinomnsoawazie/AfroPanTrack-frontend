import { SET_COUNTRY_UPDATES } from './actionTypes'

const initialState = {
    allCountryUpdates: '',
}

const countryUpdatesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_COUNTRY_UPDATES:
            console.log('updated being set')
        return {
            ...state,
            allCountryUpdates: action.payload
        }

        default:
        return state
    }
}

export default countryUpdatesReducer