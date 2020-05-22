import { SET_USER, LOGOUT, SET_API_KEYS, SET_REPORTS, RESET_LOCATION_IDS, SET_CURRENT_COUNTRY_ID, SET_CURRENT_STATE_ID, SET_CURRENT_CITY_ID, SET_CURRENT_COUNTRY_CENTER, SET_APP_USER_LOCATION, SET_APP_USER_COORDINATES, RESET_VIEWS, SET_INFECTIONS_VIEW, SET_QUARANTINE_VIEW} from '../redux/actionTypes'
import axios from 'axios'
import Geocode from 'react-geocode'


export const setAPIKeys = (dispatch) =>{
    axios.get("http://localhost:3000/apikeys")
    .then(returnedAPIKeys =>{
        console.log(returnedAPIKeys.data)
        dispatch({type: SET_API_KEYS, payload: returnedAPIKeys.data })
    })
    .catch((error) =>{
        console.log('Error:', error)
    })
}

export const resetViews = (dispatch) => {
  dispatch({type: RESET_VIEWS})
}

export const setInfectionsMapView = (dispatch) =>{
  console.log("setting infections view", dispatch)
  dispatch({type: SET_INFECTIONS_VIEW})
}

export const setQuarantineCentersView = (dispatch) => {
  dispatch({type: SET_QUARANTINE_VIEW})
}

export const setReports = (dispatch) => {
  axios.get("http://localhost:3000/reports")
  .then(allReports => {
    console.log(allReports)
    console.log(allReports.data)
    dispatch({type: SET_REPORTS, payload: allReports.data})
  })
}

export const setAppUserLocation = (dispatch, Google_mapsAPIKey) => {
    const queryConditions= { considerIp: true };
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${Google_mapsAPIKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryConditions),
      })
      .then((response) => response.json())
      .then((data) => {
          let lat= data.location.lat
          let lng = data.location.lng
          let coords = {lat: lat, lng: lng}
          dispatch({type: SET_APP_USER_COORDINATES, payload: coords})
          Geocode.setApiKey(Google_mapsAPIKey)
          Geocode.fromLatLng(lat, lng).then(
            response => {
              let responseCity = response.results[0].address_components[2].long_name
              let responseState = response.results[0].address_components[5].long_name
              let responseCountry = response.results[0].address_components[6].long_name
              let userLocation = {city: responseCity, state: responseState, country: responseCountry}
              dispatch({type: SET_APP_USER_LOCATION, payload: userLocation})
            },
            error => {
              console.error(error);
            }
          )
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}

export const login = (user, push, dispatch) =>{
    axios.post('http://localhost:3000/login', user)
        .then(r => {
          if(r.data.user.email_confirmed){
            dispatch({type: SET_USER, payload: r.data}) 
            if(r.data.user.admin){
              push('/admin-panel')
            }else if(r.data.user.moderator){
              push('/moderator-panel')
            }else{
              push('/user-panel')
            }
          }else{
            push('/request_confirmation')
          }
        })
        .catch((error) =>{
            console.log('Error:', error)
            alert('Incorrect username and/or password. Try again with correct credentials. Sign up if you do not have an account')
        })
}

export const logout = (dispatch, push) => {
  dispatch({type: LOGOUT})
  push('/')
}


export const createUser = (user, props) => {
  console.log(user)
  axios.post("http://localhost:3000/users", user)
  .then(userObj => {
      alert('Account successfully created. An email was sent to the email you provided during this registration. Please, please check your inbox and confirm your email address to continue using this app as a registered user')
      alert('You will now be redirected to the homepage')
      props.push('/')
  })
  .catch(error => {
      alert('User not created')
  })
}

export const resetLocations = (dispatch) => {
  dispatch({type: RESET_LOCATION_IDS})
}

export const setCurrentCountryID = (countryID, dispatch) =>{
  dispatch({type: SET_CURRENT_COUNTRY_ID, payload: countryID})
}

export const setCurrentStateID = (stateID, dispatch) => {
  dispatch({type: SET_CURRENT_STATE_ID, payload: stateID})
}

export const setCurrentCityID = (cityID, dispatch) => {
  dispatch({type: SET_CURRENT_CITY_ID, payload: cityID})
}

export const setCurrentCountryCenter = (countryCenter, dispatch) => {
  dispatch({type: SET_CURRENT_COUNTRY_CENTER, payload: countryCenter})
}


export const createReport = (dispatch, push, user, report) => {
  console.log(report)
  axios.post("http://localhost:3000/reports", report)
  .then(returnedReports => {
    console.log(returnedReports.data)
    alert('Report successfully created. You will now be directed to your dashboard')
    dispatch({type: SET_REPORTS, payload: returnedReports.data})
    if(user.admin){
      push('/admin-panel')
    }else if(user.moderator){
      push('/moderator-panel')
    }else{
      push('/user-panel')
    }
  })
}