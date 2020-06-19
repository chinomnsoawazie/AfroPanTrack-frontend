import React from 'react'

function PanelClosedBids(props) {
    const {bid} = props

    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Item Description: </strong></label>{bid.barter.item_description}
            </div>

            {bid.requestor ?
                <div className='row'>
                <label><strong>Requestor: </strong></label>{bid.requestor.first_name}, {bid.requestor.last_name}
                </div>
                :
                <div className='row'>
                    <label><strong>Receiver of My Item: </strong></label>{bid.receiver.first_name}, {bid.receiver.last_name}
                </div>
            }

            <div className='row'>
                <label><strong>Quantity Requested: </strong></label>{bid.barter.quantity_requested}
            </div>

            <div className='row'>
                <label><strong>Quantity accepted: </strong></label>{bid.barter.quantity_received}
            </div>

            <div className='row'>
                <label><strong>Date Closed: </strong></label>{bid.barter.date_done}
            </div>

            <div className='row'>
                <label><strong>Comments: </strong></label>{bid.barter.comments}
            </div>
        </div>
    )
}

export default PanelClosedBids