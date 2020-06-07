import React from 'react'
import UpdateCard from '../cards/UpdateCard'


export const CountryUpdates = (props) => {
    const {loggedIn, first_name, allCountryUpdates, currentCountry} = props

    const countryUpdates = allCountryUpdates.AllUpdates.filter(update => update.country === currentCountry.name)

    return (
        <>
        <div>
            {loggedIn ? 
            <p>Hello <strong>{first_name}</strong>, you are viewing updates for <strong>{currentCountry.name}</strong> </p>
            :
            <p>You are currently viewing updates for <strong>{currentCountry.name}</strong></p>
        }

        </div>
        <div className='row updates-view'>
            <div className='column'>
            {countryUpdates.map(update => <UpdateCard key={update.id} update={update}/>)}
            </div>
            <div className='column'>
                <h3>Country stats and charts will be here</h3>
            </div>
        </div>
        </>
    )
}


export default CountryUpdates