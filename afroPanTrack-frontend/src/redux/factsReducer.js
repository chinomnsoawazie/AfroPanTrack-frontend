import { SET_FACTS } from '../redux/actionTypes'

const initialState = {
    allFacts: '',
}

const factsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_FACTS:
        return {
            ...state,
            allFacts: action.payload
        }

        default:
        return state
    }
}

export default factsReducer