import {SET_USER, LOGOUT, SET_API_KEYS} from '../redux/actionTypes'

const initialState = {
    user: {},
    user_id: '',
    loggedIn: false,
    token: [],
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone_no: '',
    country: '',
    state: '',
    city: '',
    street_address: '',
    google_maps_api_key: [],
    appEmail: '',
    email_confirmed: false,
    admin: false,
    moderator: false,
    allowed_to_request: false,
    allowed_to_report: false
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER:
            let fetchedToken = [...action.payload.token].join('')
            let user = {...action.payload.user}
            let fetched_google_maps_api_key = action.payload.google_maps_api_key
            let fetchedEmail = action.payload.myEmail
        return {
            ...state,
            user: user,
            user_id: user.id,
            loggedIn: true,
            token: fetchedToken,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            phone_no: user.phone_no,
            email: user.email,
            country: user.country,
            state: user.state,
            city: user.city,
            street_address: user.street_address,
            google_maps_api_key: fetched_google_maps_api_key,
            appEmail: fetchedEmail,
            email_confirmed: user.email_confirmed,
            admin: user.admin,
            moderator: user.moderator,
            allowed_to_request: user.allowed_to_request,
            allowed_to_report: user.allowed_to_request
        }

        case LOGOUT:
        return {
            ...state,
            user: {},
            user_id: '',
            loggedIn: false,
            token: [],
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            phone_no: '',
            country: '',
            state: '',
            city: '',
            street_address: '',
            email_confirmed: false,
            admin: false,
            moderator: false,
            allowed_to_request: false,
            allowed_to_report: false
        }

        case SET_API_KEYS:
        return {
            ...state,
            google_maps_api_key: action.payload.google_maps_api_key,
            appEmail: action.payload.myEmail
        }

        default:
        return state
    }
}

export default userReducer