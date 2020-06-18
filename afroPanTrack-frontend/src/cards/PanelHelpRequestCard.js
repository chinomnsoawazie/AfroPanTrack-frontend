import React from 'react'
import uuid from 'react-uuid'

function PanelHelpRequestCard(props) {
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
                <label><strong>Help Offered? </strong></label>
                {help.helpers.length > 0 ?
                    <>
                        Yes<br/>
                        <label><strong>Help Offer Date: </strong></label>{help.help_offer_date}
                    </>
                    :
                    <>
                        No<br/>
                    </>
                }
            </div>

            {help.helpers.length > 0 ? 
            <>
                <label><strong>Helpers: </strong></label>{help.helpers.map(helper => {
                    return (
                        <div className='row' key={uuid()}>
                            {helper.first_name}, {helper.last_name}<button className='offer-help'>Buzz Helper</button><br/>
                        </div>
                    )
                    })
                    }
            </>
            :
            null
            }
        </div>
    )
}

export default PanelHelpRequestCard