import React from 'react'
import { centerOfCountries } from '../components/CenterOfCountries'
import { setCurrentCountryCenter } from '../redux/actions'
import {connect} from 'react-redux'



const CountrySelector = (props) => {
    const {push, dispatch} = props

    const handleChangeCountry = (event) => {
        let selectedCountry = centerOfCountries.find(({id}) => id.toString() === event.target.value)
        let selectedCountryCenter = {
            lat: selectedCountry.lat,
            lng: selectedCountry.lng
        }
        setCurrentCountryCenter(selectedCountryCenter, dispatch)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        push('/infections-map')
    }
    console.log(props)

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

        {props.viewInfectionMap ? 
        <input className='page-buttons' type="submit" value="View Infection Map" />
        :
        <input className='page-buttons' type="submit" value="View Quarantine Centres" />
    }


        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        viewInfectionMap: state.allViewsInfo.viewInfectionMap,
    }
}

export default connect(mapStateToProps)(CountrySelector)