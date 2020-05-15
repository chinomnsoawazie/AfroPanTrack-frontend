import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const AdminPage = (props) => {
    const {loggedIn} = props

    const handleCreateInfectionReport = () => {
        if(!loggedIn){
            alert('You need to have an account and logged in in order to report an infection')
        }else{
            props.history.push('/report-infection')
        }
    }

    return (
        <div className='panels'>
            <div className='colum'>
                <div className='row'>
                    <button>Manage users</button>
                </div>
                <div className='row'>
                    <button>Manage moderators</button>
                </div>
                <div className='row'>
                    <button>Create requests</button>
                </div>
            </div>
            <div className='colum'>
                <div className='row'>
                    <button>Manage reports</button>
                </div>
                <div className='row'>
                    <button>Generate reports</button>
                </div>
                <div className='row'>
                    <button onClick={handleCreateInfectionReport}>Create infection report</button>
                </div>
            </div><br/><br/>
            This is the admin page. Admin can ban users banging their allowed_to_request and/or allowed_to_report attributes.
            Check if user is admin or moderator before banning. 
            
            <ul>
                <li>Admin can ban moderators and users but moderators can only ban users.</li>
                <li>Admin and moderators can confirm reports, update Quarantine centers, add COVID Facts, update Global COVID updates and include government updates.</li>
                <li>Admin can generate reports. This will list all reported cases, their confirm status, and conditions of quarantine centers</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.allUserInfo.loggedIn
    }
}
export default connect(mapStateToProps)(withRouter(AdminPage))
