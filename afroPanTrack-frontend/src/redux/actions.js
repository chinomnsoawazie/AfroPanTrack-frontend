import { SET_USER, LOGOUT, SET_API_KEYS, SET_REPORTS, RESET_LOCATION_IDS, SET_CURRENT_COUNTRY_ID, SET_CURRENT_STATE_ID, SET_CURRENT_CITY_ID, SET_CURRENT_COUNTRY_CENTER, SET_APP_USER_LOCATION, SET_APP_USER_COORDINATES, RESET_VIEWS, SET_INFECTIONS_VIEW, SET_QUARANTINE_VIEW, SET_CURRENT_COUNTRY, SET_UPDATES_VIEW, SET_HELP_REQUESTS_VIEW, SET_BARTERS_VIEW, SET_REPORT_INFECTIONS_VIEW, SET_SIGNUP_VIEW, RESET_LOCATION_PARAMS, SET_USER_COUNTRY, SET_CENTRES, SET_FACTS, SET_COUNTRY_UPDATES, SET_HELP_REQUESTS, SET_HELPERS, 
  SET_GLOBAL_DATA,
  SET_GLOBAL_CHART_DATA} from '../redux/actionTypes'
import axios from 'axios'
import Geocode from 'react-geocode'


export const setAPIKeys = (dispatch) =>{
  axios.get("http://localhost:3000/apikeys")
  .then(returnedAPIKeys =>{
    dispatch({type: SET_API_KEYS, payload: returnedAPIKeys.data })
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}

//REPORT ISSUES
export const setReports = (dispatch) => {
  axios.get("http://localhost:3000/reports")
  .then(allReports => {
    dispatch({type: SET_REPORTS, payload: allReports.data})
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}

export const createReport = (dispatch, push, user, report) => {
  axios.post("http://localhost:3000/reports", report)
  .then(returnedReports => {
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
  .catch((error) =>{
    console.log('Error:', error)
  })
}

//UPDATE ISSUES
export const setCountryUpdates = (dispatch) => {
  axios.get("http://localhost:3000/update")
  .then(allUpdates => {
    dispatch({type: SET_COUNTRY_UPDATES, payload: allUpdates.data})
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}

//VIEWS ISSUES
export const resetViews = (dispatch) => {
  dispatch({type: RESET_VIEWS})
}

export const setInfectionsMapView = (dispatch) =>{
  dispatch({type: SET_INFECTIONS_VIEW})
}

export const setQuarantineCentersView = (dispatch) => {
  dispatch({type: SET_QUARANTINE_VIEW})
}

export const setCountryUpdatesView = (dispatch) => {
  dispatch({type: SET_UPDATES_VIEW})
}

export const setHelpRequestsView = (dispatch) => {
  dispatch({type: SET_HELP_REQUESTS_VIEW})
}

export const setBartersView = (dispatch) => {
  dispatch({type: SET_BARTERS_VIEW})
}

export const setReportInfectionsView = (dispatch) => {
  dispatch({type: SET_REPORT_INFECTIONS_VIEW})
}

export const setSignupView = (dispatch) => {
  dispatch({type: SET_SIGNUP_VIEW})
}

//USER ISSUES
export const login = (user, push, dispatch) =>{
  axios.post('http://localhost:3000/login', user)
        .then(r => {
          if(r.data.user.email_confirmed){
            dispatch({type: SET_USER, payload: r.data})
            dispatch({type: SET_USER_COUNTRY, payload: r.data.user.country})
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

//LOCATION ISSUES
export const resetLocationParams = (dispatch) => {
  dispatch({type: RESET_LOCATION_PARAMS})
}
export const resetLocations = (dispatch) => {
  dispatch({type: RESET_LOCATION_IDS})
}

export const setCurrentCountry = (dispatch, country) => {
  dispatch({type: SET_CURRENT_COUNTRY, payload: country})
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

//QUARANTINE CENTRES ISSUES
export const setQuarantineCenters = (dispatch) => {
  axios.get("http://localhost:3000/quarantine_centre")
  .then(allCentres => {
    dispatch({type: SET_CENTRES, payload: allCentres.data})
  })
}

//QUARANTINE CENTRES ISSUES
export const setBarters = (dispatch) => {
  axios.get("http://localhost:3000/quarantine_centre")
  .then(allCentres => {
    dispatch({type: SET_REPORTS, payload: allCentres.data})
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}

//FACTS ISSUES
export const setFacts = (dispatch) => {
  axios.get("http://localhost:3000/facts")
  .then(allFacts => {
    dispatch({type: SET_FACTS, payload: allFacts.data})
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}


//HELP ISSUES
export const setHelps = (dispatch) => {
  axios.get("http://localhost:3000/help")
  .then(allHelps => {
    dispatch({type: SET_HELP_REQUESTS, payload: allHelps.data.AllHelp})
    dispatch({type: SET_HELPERS, payload: allHelps.data.AllHelpers} )
  })
  .catch((error) =>{
    console.log('Error:', error)
  })
}

export const offerHelp = (helpParams, token, dispatch) => {
  let config = {
    headers: {'Authorization': "bearer" + token}
  }
  let bodyParameters = helpParams
  axios.patch(`http://localhost:3000/help/${helpParams.id}`, bodyParameters, config)
      .then(allHelps => {
        alert('Help offer successfully recorded')
        dispatch({type: SET_HELP_REQUESTS, payload: allHelps.data.AllHelp})
      })
      .catch((error => {
        alert('Edit not successful')
      }))
}

export const createHelpRequest = (help, dispatch, push, user) => {
  axios.post("http://localhost:3000/help", help)
  .then(allHelps => {
    dispatch({type: SET_HELP_REQUESTS, payload: allHelps.data.AllHelp})
    alert('Help request successfully created')
    alert('You will now be redirected to your user panel')
    if(user.admin){
      push('/admin-panel')
    }else if(user.moderator){
      push('/moderator-panel')
    }else{
      push('/user-panel')
    }
  })
  .catch(error => {
      alert('Help request not created')
  })
}

//HELPER ISSUES
export const createHelper = (helper, dispatch) => {
    axios.post("http://localhost:3000/helper", helper)
    .then(allHelps => {
    dispatch({type: SET_HELPERS, payload: allHelps.data.AllHelpers})
    }
  )
  .catch((error) =>{
    console.log('Error:', error)
  })
}



//COVID DATA ISSUES
export const setGlobalCovidStat = (dispatch, dates) => {
  let globalCOVIDData = []

  async function getData(date){
    let response = await axios.get(`https://covid-api.com/api/reports/total?date=${date}`).then(covidData => {
      globalCOVIDData.push(covidData.data.data)
    })
    dispatch({type: SET_GLOBAL_DATA, payload: globalCOVIDData})
    dispatch({type: SET_GLOBAL_CHART_DATA, payload: globalCOVIDData })
  }
  dates.map(date => getData(date))
}
