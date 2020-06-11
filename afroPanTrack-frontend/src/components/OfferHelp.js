import React from 'react'
import HelpCard from '../cards/HelpCard'

function OfferHelp(props) {
    const {allHelps, currentCountry, user, allHelpers} = props
    console.log(props)

    const countryRequests = allHelps.filter(help => help.country === currentCountry.name)
    const ongoingHelp = countryRequests.filter(help => help.done_status === false)
    const completedHelp = countryRequests.filter(help => help.done_status === true )

    console.log(ongoingHelp)
    console.log(completedHelp)
    
    // debugger
    return (
        <div className='updates-view'>
             <div className='column'>
                 <h3>Ongoing helps</h3>
            {ongoingHelp.map(request => <HelpCard key={request.id} request={request} currentUser={user} allHelpers={allHelpers}/>)}
            </div>
            <div className='column'>
                <h3>Done helps</h3>
            {completedHelp.map(request => <HelpCard key={request.id} request={request} allHelpers={allHelpers} />)}
            </div>
        </div>
    )
}

export default OfferHelp
