import React from 'react'
import uuid from 'react-uuid'

function PanelCompletedHelpCard(props) {
    const {help} = props

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
                <label><strong>Date Completed: </strong></label>{help.date_completed}
            </div>
            <div className='row'>
                <label><strong>Helpers: </strong></label>{help.helpers.map(helper => {
                    return (
                        <div key={uuid()}> 
                            {helper.first_name}, {helper.last_name}<br/>
                        </div>
                    )
                } )}
            </div>
            <div className='row'>
                <button className='offer-help'>Thank Helper</button>
            </div>
        </div>
    )
}

export default PanelCompletedHelpCard