import React from 'react'

function PanelQuarantineCenterCard(props) {
    const {center} = props
    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>LOCATION: </strong></label><br/>
                <label><strong>Village or Town: </strong></label>{center.city_town_or_village}<br/>
                <label><strong>City: </strong></label>{center.city}<br/>
                <label><strong>LGA: </strong></label>{center.lga}<br/>
                <label><strong>State: </strong></label>{center.state}<br/>
            </div>

            <div className='row'>
                <label><strong>Date reported: </strong></label>{center.date_reported}<br/>
            </div>
            <button className='offer-help'>Edit Quarantine Center</button>
        </div>
    )
}

export default PanelQuarantineCenterCard
