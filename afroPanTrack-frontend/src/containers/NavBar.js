import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout, setQuarantineCentersView, setInfectionsMapView} from '../redux/actions'


const NavBar = (props) => {

    const {loggedIn, first_name} = props


    const reportInfection = () => {
        if(!loggedIn){
            alert('You need to have an account and logged in in order to report an infection')
        }else{
            props.history.push('/report-infection')
        }
    }


    const handleViewInfectionMap = () => {
        setInfectionsMapView(props.dispatch)

        props.history.push('/select-country-only')
    }

    const handleViewQuarantineCenters = () => {
        setQuarantineCentersView(props.dispatch)
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
                    <button onClick={() => props.history.push('/government-updates')} className="nav-buttons">Government Updates</button>
                </div>

                <div className='column'>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">COVID-19 facts</button>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">Global COVID-19 updates</button>
                </div>
                
                <div className='column'>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">Request/Offer help</button>
                    <button onClick={() => props.history.push('/create-user')} className="nav-buttons">Barter stuff</button>
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
                    <button onClick={() => props.history.push('/signup')} className="nav-buttons">Sign up</button>
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