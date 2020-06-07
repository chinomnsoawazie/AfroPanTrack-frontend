import React from 'react'
import UpdateCard from '../cards/UpdateCard'


export const GovtUpdates = (props) => {
    const {loggedIn, first_name, allGovtUpdates, currentCountry} = props

    console.log(props)
    return (
        <>
        <div>

            {loggedIn ? 
            <p>Hello <strong>{first_name}</strong>, you are viewing updates for <strong>{currentCountry.name}</strong> </p>
            :
            <p>You are currently viewing updates for <strong>{currentCountry.name}</strong></p>
            
        }

        </div>
        <div>

            {allGovtUpdates.AllUpdates.map(update => 
                <UpdateCard key={update.id} update={update}/>)}


        </div>
        </>
    )
}


export default GovtUpdates
