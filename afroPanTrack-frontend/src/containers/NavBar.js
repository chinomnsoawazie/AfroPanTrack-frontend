import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout, setQuarantineCentersView, setInfectionsMapView, setReportInfectionsView, setHelpRequestsView, setBartersView, setSignupView, setQuarantineCenters, setReports, setGovtUpdatesView, setGovtUpdates} from '../redux/actions'


const NavBar = (props) => {

    const {loggedIn, first_name, dispatch} = props


    const reportInfection = () => {
        if(!loggedIn){
            alert('You need to have an account and logged in in order to report an infection')
        }else{
            setReportInfectionsView(dispatch)
            props.history.push('/select-country-only')
        }
    }
    const handleRequestOrOfferHelp = () => {
        if(!loggedIn){
            alert('You need to have an account and logged in in order to request or offer help')
        }else{
            setHelpRequestsView(dispatch)
            props.history.push('/select-country-only')
        }
    }

    const handleBarterStuff = () => {
        if(!loggedIn){
            alert('You need to have an account and logged in in order to barter stuff')
        }else{
            setBartersView(dispatch)
            props.history.push('/select-country-only')
        }
    }

    const handleSignUp = () => {
        setSignupView(dispatch)
        props.history.push('/select-country-only')
    }

    const handleViewInfectionMap = () => {
        setInfectionsMapView(dispatch)
        setReports(dispatch)
        props.history.push('/select-country-only')
    }

    const handleViewQuarantineCenters = () => {
        setQuarantineCentersView(dispatch)
        setQuarantineCenters(dispatch)
        props.history.push('/select-country-only')
    }

    const handleGovtUpdatesView = () => {
        setGovtUpdates(dispatch)
        setGovtUpdatesView(dispatch)
        props.history.push('/select-country-only')
    }


    return (
        <header className='nav-bar'>
            <nav className='nav-bar-items row' style={{  borderTop: "solid", borderBottom: "solid", borderWidth: "2px", borderColor: "#929ca7", borderRadius: "15px"}}>

                <div className='column'>
                    <button onClick={handleViewInfectionMap} className="nav-buttons">COVID-19 infection map</button>
                    <button onClick={reportInfection} className="nav-buttons">Report an infection</button>
                </div>

                <div className='column'>
                    <button onClick={handleViewQuarantineCenters} className="nav-buttons">Quarantine Centers</button>
                    <button onClick={handleGovtUpdatesView} className="nav-buttons">Government Updates</button>
                </div>

                <div className='column'>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">COVID-19 facts</button>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">Global COVID-19 updates</button>
                </div>
                
                <div className='column'>
                    <button onClick={handleRequestOrOfferHelp} className="nav-buttons">Request/Offer help</button>
                    <button onClick={handleBarterStuff} className="nav-buttons">Barter stuff</button>
                </div>



                {loggedIn ?
               <>

                <div className='column'>
                    Welcome {first_name}!
                </div>
                <div className='column'>
                    <button onClick={() => props.history.push('/user-profile')} className="nav-buttons">Profile</button>
                    <button onClick={() => logout(props.dispatch, props.history.push)} className="nav-buttons">logout</button>
                </div>
               </>
                :
                <div className='column'>
                    <button onClick={handleSignUp} className="nav-buttons">Sign up</button>
                    <button onClick={() => props.history.push('/login')} className="nav-buttons">Login</button>
                </div>
            }
            
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.allUserInfo.loggedIn,
        first_name: state.allUserInfo.first_name
    }
}

export default connect(mapStateToProps)(withRouter(NavBar))