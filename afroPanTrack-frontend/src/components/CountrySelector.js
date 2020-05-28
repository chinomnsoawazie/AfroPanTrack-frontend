import React from 'react'
import { centerOfCountries } from '../components/CenterOfCountries'
import { setCurrentCountryCenter, setCurrentCountry } from '../redux/actions'
import {connect} from 'react-redux'



const CountrySelector = (props) => {
    const {push, dispatch, viewBarters, viewGovtUpdates, viewHelpRequests, viewInfectionMap, viewQuarantineMap, signUp, reportAnInfection} = props

    const handleChangeCountry = (event) => {
        if(event.target.value === 'Select country'){
            alert('Please chose a valid country')
        }else if(event.target.value === '999999'){
            let selectedCountry = 'Others'
            setCurrentCountry(dispatch, selectedCountry)
        }else{
            let selectedCountry = centerOfCountries.find(({id}) => id.toString() === event.target.value)
            let selectedCountryCenter = {
                lat: selectedCountry.lat,
                lng: selectedCountry.lng
            }
            setCurrentCountryCenter(selectedCountryCenter, dispatch)
            setCurrentCountry(dispatch, selectedCountry.name)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.elements[0].value === 'Select country'){
            alert('You have to select a country')
        }else if (event.target.elements[1].value === 'barters'){
            push('/barter')
        }else if(event.target.elements[1].value === 'govtUpdates'){
            push('/govt-updates')
        }else if(event.target.elements[1].value === 'offerHelp'){
            push('/offer-help')
        }else if(event.target.elements[1].value === 'requestHelp'){
            push('/request-help')
        }else if(event.target.elements[1].value === 'infectionMap'){
            push('/infections-map')
        }else if(event.target.elements[1].value === 'quarantineMap'){
            push('/quarantine-map')
        }else if(event.target.elements[1].value === 'signUp'){
            push('/signup')
        }else if(event.target.elements[1].value === 'reportInfection'){
            push('/report-infection')
        }
    }

    const viewButton = () => {
        if (viewBarters){
            return <>
                    <button className='page-buttons' type='submit' value='barters'>View Barters</button>
                </>
        }else if(viewGovtUpdates){
            return <>
                    <button className='page-buttons' type='submit' value='govtUpdates'>View Updates</button>
                </>
        }else if(viewHelpRequests) {
            return (<div>
                <label>
                    <strong>Offer or Request Help?:</strong>
                </label>
                <select className='location-select'>
                    <option defaultValue='makeSelection'>Select an option </option>
                    <option value='offerHelp'>Offer help</option>
                    <option value='requestHelp'>Request help</option>
                </select>  
            <button className='page-buttons' type='submit'>Go</button><br/>
            </div>)
        }else if(viewInfectionMap){
            return <>
                <button className='page-buttons' type='submit' value='infectionMap'>View infections map</button>
            </>
        }else if(viewQuarantineMap){
            return <>
                <button className='page-buttons' type='submit' value='quarantineMap'>View Quarantine centers</button>
            </>
        }else if(signUp){
            return <>
                <button className='page-buttons' type='submit' value='signUp'>Fill signup form</button>
            </>
        }else if(reportAnInfection){
            return <>
                <button className='page-buttons' type='submit' value='reportInfection'>Report infection incidents</button>
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
                <option defaultValue='SelectCountry'>Select country </option>
                {centerOfCountries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
                {signUp ? 
                <option value='999999'>Others </option>
                :
                null
                }
            </select> 
        </div>
       {viewButton()}
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
    }
}

export default connect(mapStateToProps)(CountrySelector)