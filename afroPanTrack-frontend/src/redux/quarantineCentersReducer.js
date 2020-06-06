import { SET_CENTRES } from '../redux/actionTypes'

const initialState = {
    allCentres: '',
}

const quarantineCentersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_CENTRES:
        return {
            ...state,
            allCentres: action.payload
        }

        default:
        return state
    }
}

export default quarantineCentersReducer