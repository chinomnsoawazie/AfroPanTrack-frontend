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

const MainContainer = (props) => {
    return (
        <>
        <Switch>
            <Route exact path='/' render = { () => <HomePage />} />
            <Route exact path='/login' render = { () => <Login push={props.history.push} dispatch={props.dispatch} google_maps_api_key={props.google_maps_api_key}/>} />
            <Route exact path='/signup' render = { () => <SignUp push={props.history.push} dispatch={props.dispatch}/>} />
            <Route exact path='/infections-map' render = { () => <InfectionsMapCard allReports={props.allReports} currentCountryCenter={props.currentCountryCenter} apiKey={props.google_maps_api_key}/>} />
            <Route exact path='/select-country-only' render = { () => <CountrySelector push={props.history.push} dispatch={props.dispatch}/> } />
            <Route exact path='/request_confirmation' render = { () => <RequestConfirmation />} />
            <Route exact path='/admin-panel' render = { () => <AdminPage />} />
            <Route exact path='/moderator-panel' render = { () => <ModeratorPanel />} />
            <Route exact path='/user-panel' render = { () => <UserPanel />} />
            <Route exact path='/report-infection' render = { () => <ReportInfection appUserLocation={props.appUserLocation} user_id={props.user_id} appUserCoordinates={props.appUserCoordinates} dispatch={props.dispatch} push={props.history.push} user={props.user}/>} />
            <Route exact path='/quarantine-map' render = { () => <QuarantineCenters allReports={props.allReports} currentCountryCenter={props.currentCountryCenter} apiKey={props.google_maps_api_key}/>} />





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
        currentCountryCenter: state.allReportInfo.currentCountryCenter,
        appUserLocation: state.allReportInfo.appUserLocation,
        user_id: state.allUserInfo.user_id,
        appUserCoordinates: state.allReportInfo.appUserCoordinates,
        user: state.allUserInfo.user
    }
}

export default connect(mapStateToProps)(withRouter(MainContainer))
