import React from 'react'
import {Route, withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from '../forms/Login'
import { SignUp } from '../forms/SignUp'
import HomePage from '../components/HomePage'
import InfectionsMapCard from '../components/InfectionsMapCard'
import CountrySelector from '../components/CountrySelector'
import RequestConfirmation from '../components/RequestConfirmation'
import AdminPage from './AdminPage'
import ReportInfection from '../forms/ReportInfection'
import ModeratorPanel from './ModeratorPanel'
import UserPanel from './UserPanel'
import QuarantineCenters from '../components/QuarantineCenters'
import Barter from '../components/Barter'
import CovidFacts from '../components/CovidFacts'
import GlobalCovidUpdates from '../components/GlobalCovidUpdates'
import OfferHelp from '../components/OfferHelp'
import RequestHelp from '../forms/RequestHelp'
import CountryUpdates from '../components/CountryUpdates'


const MainContainer = (props) => {
    const {google_maps_api_key, allReports, allCountryUpdates, allCentres, allFacts, allHelps, allHelpers, globalData, globalChartData,
            dispatch, currentCityID, currentStateID, appUserCoordinates, currentCountry, currentCountryCenter,
             appUserLocation, user_id,  user, loggedIn, first_name
          } = props

    return (
        <>
        <Switch>

        {/*USER ISSUES */}
            <Route exact path='/login' render = { () => <Login push={props.history.push} dispatch={dispatch} google_maps_api_key={google_maps_api_key}/>} />
            <Route exact path='/signup' render = { () => <SignUp push={props.history.push} dispatch={dispatch} currentCountry={currentCountry} currentStateID={currentStateID} currentCityID={currentCityID}/>} />
            <Route exact path='/admin-panel' render = { () => <AdminPage />} />
            <Route exact path='/moderator-panel' render = { () => <ModeratorPanel />} />
            <Route exact path='/user-panel' render = { () => <UserPanel user={user} allHelps={allHelps}/>} />

            {/*MAP ISSUES */}
            <Route exact path='/infections-map' render = { () => <InfectionsMapCard allReports={allReports} currentCountryCenter={currentCountryCenter} apiKey={google_maps_api_key}/>} />
            <Route exact path='/quarantine-map' render = { () => <QuarantineCenters allCentres={allCentres} currentCountryCenter={currentCountryCenter} apiKey={google_maps_api_key}/>} />

            {/*ENABLING COMPONENTS*/}
            <Route exact path='/select-country-only' render = { () => <CountrySelector push={props.history.push} dispatch={props.dispatch}/> } />
            <Route exact path='/request_confirmation' render = { () => <RequestConfirmation />} />

            {/*PAGES */}
            <Route exact path='/' render = { () => <HomePage />} />
            <Route exact path='/report-infection' render = { () => <ReportInfection appUserLocation={appUserLocation} user_id={user_id} appUserCoordinates={appUserCoordinates} dispatch={dispatch} push={props.history.push} user={user} currentCountry={currentCountry} currentStateID={currentStateID} currentCityID={currentCityID}/>} />
            <Route exact path='/barter' render = { () => <Barter /> } />
            <Route exact path='/covid-facts' render = { () => <CovidFacts allFacts={allFacts} loggedIn={loggedIn} first_name={first_name}/>} />
            <Route exact path='/global-covid-updates' render = { () => <GlobalCovidUpdates globalData={globalData} globalChartData={globalChartData}/>} />
            <Route exact path='/offer-help' render = { () => <OfferHelp allHelps={allHelps} allHelpers={allHelpers} user={user} currentCountry={currentCountry} currentStateID={currentStateID} currentCityID={currentCityID}/>} />
            <Route exact path='/request-help' render = { () => <RequestHelp currentCountry={currentCountry} dispatch={dispatch} appUserLocation={appUserLocation} user={user} push={props.history.push} currentStateID={currentStateID} currentCityID={currentCityID}/> } />
            <Route exact path='/country-updates' render = { () => <CountryUpdates allCountryUpdates={allCountryUpdates} loggedIn={loggedIn} first_name={first_name} currentCountry={currentCountry} globalData={globalData}/>} />


        </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        /*USER ISSUES*/
        loggedIn: state.allUserInfo.loggedIn,
        user: state.allUserInfo.user,
        first_name: state.allUserInfo.first_name,
        user_id: state.allUserInfo.user_id,
        phone_no: state.allUserInfo.phone_no,
        admin: state.allUserInfo.admin,
        appEmail: state.allUserInfo.appEmail,
        moderator: state.allUserInfo.moderator,
        allowed_to_report: state.allUserInfo.allowed_to_report,
        email_confirmed: state.allUserInfo.email_confirmed,
        allowed_to_request: state.allUserInfo.allowed_to_request,

        /*APP-WIDE ISSUES*/
        google_maps_api_key: state.allUserInfo.google_maps_api_key,
        token: state.allUserInfo.token,

        /*LOCATION ISSUES*/
        appUserLocation: state.allLocationInfo.appUserLocation,
        appUserCoordinates: state.allLocationInfo.appUserCoordinates,
        currentCountry: state.allLocationInfo.SelectedCountry,
        currentCountryCenter: state.allLocationInfo.currentCountryCenter,
        loggedInUserCountry: state.allLocationInfo.loggedInUserCountry,
        currentStateID: state.allLocationInfo.currentStateID,
        currentCountryID: state.allLocationInfo.currentCountryID,
        currentCityID: state.allLocationInfo.currentCityID,

        /*REPORTS ISSUES*/
        allReports: state.allReportInfo.allReports,

        /*QUARANTINE CENTRE ISSUES*/
        allCentres: state.allQuarantineCenterInfo.allCentres,

        /*COUNTRY UPDATE ISSUES*/
        allCountryUpdates: state.allCountryUpdateInfo.allCountryUpdates,

        /*FACTS ISSUES */
        allFacts: state.allFactInfo.allFacts,

        /**HELP ISSUES */
        allHelps: state.allHelpInfo.allHelps,
        allHelpers: state.allHelpInfo.allHelpers,

        /*COVID CHART ISSUES */
        globalData: state.allChartInfo.globalData,
        globalChartData: state.allChartInfo.globalChartData,


    }
}

export default connect(mapStateToProps)(withRouter(MainContainer))
