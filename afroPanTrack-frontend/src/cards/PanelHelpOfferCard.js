import React from 'react'

function PanelHelpOfferCard(props) {
    const {help} = props 
    
    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Requestor: </strong></label>{help.requestor.first_name}, {help.requestor.last_name}<br/>
            </div>
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
                <label><strong>Date Required: </strong></label>{help.date_required}<br/>
                <button className='offer-help'>Buzz Requestor</button>
                <button className='offer-help'>Withdraw help offer</button>
            </div>
        </div>
    )
}

export default PanelHelpOfferCard