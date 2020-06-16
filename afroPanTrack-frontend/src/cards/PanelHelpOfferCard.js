import React from 'react'

function PanelHelpOfferCard(props) {
    const {help} = props
    console.log(help)
    
    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Description: </strong></label>{help.description}
            </div>
            <div className='row'>
                <label><strong>Quantity Requested: </strong></label>{help.qty_requested}
            </div>
            <div className='row'>
                <label><strong>Date requested: </strong></label>{help.date_requested}
            </div>
            <div className='row'>
                <label><strong>Date Required: </strong></label>{help.date_required}
            </div>

            <div className='row'>
                <label><strong>Helper:</strong></label>{help.helper.last_name}, {help.helper.first_name} 
            </div>

            <div className='row'>
                <button className='offer-help'>Buzz Helper</button>
            </div>
        </div>
    )
}

export default PanelHelpOfferCard
