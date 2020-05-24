import React from 'react'
import { centerOfCountries } from '../components/CenterOfCountries'
import { setCurrentCountryCenter, setCurrentCountry } from '../redux/actions'
import {connect} from 'react-redux'



const CountrySelector = (props) => {
    const {push, dispatch, viewBarters, viewGovtUpdates, viewHelpRequests, viewInfectionMap, viewQuarantineMap, signUp, reportAnInfection, CurrentCountry} = props

    const handleChangeCountry = (event) => {
        let selectedCountry = centerOfCountries.find(({id}) => id.toString() === event.target.value)
        let selectedCountryCenter = {
            lat: selectedCountry.lat,
            lng: selectedCountry.lng
        }
        setCurrentCountryCenter(selectedCountryCenter, dispatch)
        console.log(selectedCountry.name)
        setCurrentCountry(dispatch, selectedCountry.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        push('/infections-map')
    }
    console.log(props)

    const viewButton = () => {
        console.log( viewBarters, viewGovtUpdates, viewHelpRequests, viewInfectionMap, viewQuarantineMap, signUp, reportAnInfection, CurrentCountry)
        if (viewBarters){
            return <>
                    <button className='page-buttons' type='submit' value='login'>View Barters</button>
                </>
            
        }else if(viewGovtUpdates){
            return <>
                    <button className='page-buttons' type='submit' value='login'>View Updates</button>
             </>


        }else if(viewHelpRequests) {
            return <>
            <button className='page-buttons' type='submit' value='login'>Request help</button>
            <button className='page-buttons' type='submit' value='login'>Offer help</button>

        </>


        }else if(viewInfectionMap){
            return <>
            <button className='page-buttons' type='submit' value='login'>View infections map</button>
        </>

        }else if(viewQuarantineMap){
            return <>
            <button className='page-buttons' type='submit' value='login'>View Quarantine centers</button>
        </>
            
        }else if(signUp){
            return <>
            <button className='page-buttons' type='submit' value='login'>Sign up</button>
        </>
            
        }else if(reportAnInfection){
            return <>
            <button className='page-buttons' type='submit' value='login'>Report infection incidents</button>
        </>
            
        }


    }

    return (
        <div className='forms'>
        <h5>Please choose your country</h5>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <label>
                <strong>Country:</strong>
            </label>
            <select onChange={handleChangeCountry} className='location-select'>
                <option defaultValue='Select Country'>Select country </option>
                   {centerOfCountries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
            </select> 
        </div>
       {viewButton()}

        {/* <button className='page-buttons' type='submit' value='login'>Sign In</button> */}
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        viewInfectionMap: state.allViewsInfo.viewInfectionMap,
        viewQuarantineMap: state.allViewsInfo.viewQuarantineMap,
        viewGovtUpdates: state.allViewsInfo.viewGovtUpdates,
        viewHelpRequests: state.allViewsInfo.viewHelpRequests,
        viewBarters: state.allViewsInfo.viewBarters,
        reportAnInfection: state.allViewsInfo.reportAnInfection,
        signUp: state.allViewsInfo.signUp,
        CurrentCountry: state.allViewsInfo.CurrentCountry
    }
}

export default connect(mapStateToProps)(CountrySelector)