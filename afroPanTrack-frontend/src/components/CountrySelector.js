import React from 'react'
import { centerOfCountries } from '../components/CenterOfCountries'
import {countriesList} from '../components/CountriesStatesAndCities'
import { setCurrentCountryCenter, setCurrentCountry, setCurrentCountryID, setHelps } from '../redux/actions'
import {connect} from 'react-redux'



const CountrySelector = (props) => {
    const {push, dispatch, viewBarters, viewCountryUpdates, viewHelpRequests, viewInfectionMap, viewQuarantineMap, signUp, reportAnInfection} = props

    const handleChangeCountry = (event) => {
        if(event.target.value === 'Select country'){
            alert('Please chose a valid country')
        }else if(event.target.value === '999999'){
            let selectedCountry = 'Others'
            setCurrentCountry(dispatch, selectedCountry)
        }else{
            //country from above is not useful for the next 6 lines of code as it doesn't have latitude
            let selectedCountry = centerOfCountries.find(({id}) => id.toString() === event.target.value)
            let selectedCountryCenter = {
                lat: selectedCountry.lat,
                lng: selectedCountry.lng
            }
            let country = countriesList.find(({id}) => id.toString() === event.target.value)
            setCurrentCountryCenter(selectedCountryCenter, dispatch)
            //will use country from above as it comes with more needed parameters
            setCurrentCountry(dispatch, country)
            setCurrentCountryID(country.id, dispatch)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.elements[0].value === 'Select country'){
            alert('You have to select a country')
        }else if (event.target.elements[1].value === 'barters'){
            push('/barter')
        }else if(event.target.elements[1].value === 'countryUpdates'){
            push('/country-updates')
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
        }else if(viewCountryUpdates){
            return <>
                    <button className='page-buttons' type='submit' value='countryUpdates'>View Updates</button>
                </>
        }else if(viewHelpRequests) {
            setHelps(dispatch)
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
        viewCountryUpdates: state.allViewsInfo.viewCountryUpdates,
        viewHelpRequests: state.allViewsInfo.viewHelpRequests,
        viewBarters: state.allViewsInfo.viewBarters,
        reportAnInfection: state.allViewsInfo.reportAnInfection,
        signUp: state.allViewsInfo.signUp,
    }
}

export default connect(mapStateToProps)(CountrySelector)