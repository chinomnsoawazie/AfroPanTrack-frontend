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
import { QuarantineCenters } from '../components/QuarantineCenters'
import Barter from '../components/Barter'
import CovidFacts from '../components/CovidFacts'
import GlobalCovidUpdates from '../components/GlobalCovidUpdates'
import OfferHelp from '../components/OfferHelp'
import RequestHelp from '../components/RequestHelp'
import GovtUpdates from '../components/GovtUpdates'


const MainContainer = (props) => {
    const {loggedIn, first_name, phone_no, admin, moderator, google_maps_api_key, token, appEmail,
            email_confirmed, allowed_to_request, allowed_to_report, allReports, dispatch,
            currentCountryCenter, appUserLocation, user_id, appUserCoordinates, user, currentCountry} = props
    return (
        <>
        <Switch>

        {/*USER ISSUES */}
            <Route exact path='/login' render = { () => <Login push={props.history.push} dispatch={dispatch} google_maps_api_key={google_maps_api_key}/>} />
            <Route exact path='/signup' render = { () => <SignUp push={props.history.push} dispatch={dispatch}/>} />
            <Route exact path='/admin-panel' render = { () => <AdminPage />} />
            <Route exact path='/moderator-panel' render = { () => <ModeratorPanel />} />
            <Route exact path='/user-panel' render = { () => <UserPanel />} />

            {/*MAP ISSUES */}
            <Route exact path='/infections-map' render = { () => <InfectionsMapCard allReports={allReports} currentCountryCenter={currentCountryCenter} apiKey={google_maps_api_key}/>} />
            <Route exact path='/quarantine-map' render = { () => <QuarantineCenters allReports={allReports} currentCountryCenter={currentCountryCenter} apiKey={google_maps_api_key}/>} />

            {/*ENABLING COMPONENTS*/}
            <Route exact path='/select-country-only' render = { () => <CountrySelector push={props.history.push} dispatch={props.dispatch}/> } />
            <Route exact path='/request_confirmation' render = { () => <RequestConfirmation />} />

            {/*PAGES */}
            <Route exact path='/' render = { () => <HomePage />} />
            <Route exact path='/report-infection' render = { () => <ReportInfection appUserLocation={appUserLocation} user_id={user_id} appUserCoordinates={appUserCoordinates} dispatch={dispatch} push={props.history.push} user={user} currentCountry={currentCountry}/>} />
            <Route exact path='/barter' render = { () => <Barter /> } />
            <Route exact path='/covid-facts' render = { () => <CovidFacts />} />
            <Route exact path='/global-covid-updates' render = { () => <GlobalCovidUpdates />} />
            <Route exact path='/offer-help' render = { () => <OfferHelp />} />
            <Route exact path='/request-help' render = { () => <RequestHelp /> } />
            <Route exact path='/govt-updates' render = { () => <GovtUpdates />} />


        </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.allUserInfo.loggedIn,
        first_name: state.allUserInfo.first_name,
        phone_no: state.allUserInfo.phone_no,
        admin: state.allUserInfo.admin,
        moderator: state.allUserInfo.moderator,
        google_maps_api_key: state.allUserInfo.google_maps_api_key,
        token: state.allUserInfo.token,
        appEmail: state.allUserInfo.appEmail,
        email_confirmed: state.allUserInfo.email_confirmed,
        allowed_to_request: state.allUserInfo.allowed_to_request,
        allowed_to_report: state.allUserInfo.allowed_to_report,
        allReports: state.allReportInfo.allReports,
        currentCountryCenter: state.allLocationInfo.currentCountryCenter,
        appUserLocation: state.allLocationInfo.appUserLocation,
        user_id: state.allUserInfo.user_id,
        appUserCoordinates: state.allReportInfo.appUserCoordinates,
        user: state.allUserInfo.user,
        currentCountry: state.allLocationInfo.SelectedCountry
    }
}

export default connect(mapStateToProps)(withRouter(MainContainer))
