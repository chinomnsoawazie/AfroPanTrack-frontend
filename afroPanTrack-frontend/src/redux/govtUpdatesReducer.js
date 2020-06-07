import { SET_GOVT_UPDATES } from '../redux/actionTypes'

const initialState = {
    allGovtUpdates: '',
}

const govtUpdateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_GOVT_UPDATES:
            console.log('updated being set')
        return {
            ...state,
            allGovtUpdates: action.payload
        }

        default:
        return state
    }
}

export default govtUpdateReducer