import React from 'react'

function PanelHelpOfferCard(props) {
    const {help} = props 
    
    console.log(help)
    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Requestor: </strong></label>{help.requestor.first_name}, {help.requestor.last_name}
                <button className='offer-help'>Buzz Requestor</button>
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
                <label><strong>Date Required: </strong></label>{help.date_required}
            </div>

            {/* add quantity offered by each helper */}

            {/* <div className='row'>
                <label><strong>Help Offered By:</strong></label>{help.helper.last_name}, {help.helper.first_name} 
            </div> */}

            <div className='row'>
            </div>
        </div>
    )
}

export default PanelHelpOfferCard