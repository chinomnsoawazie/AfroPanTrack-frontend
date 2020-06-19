import React from 'react'
import uuid from 'react-uuid'

function PanelBarterBidsCard(props) {
    const {bid} = props

    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Requestor: </strong></label>{bid.bid_owner.first_name}, {bid.bid_owner.last_name}
            </div>

            <div className='row'>
                <label><strong>Requestor Location: </strong></label>{bid.bid_owner.street_address}, {bid.bid_owner.city}, {bid.bid_owner.state}<br/><strong>LGA:</strong>{bid.bid_owner.lga}
            </div>

            <div className='row'>
                <label><strong>Item Description: </strong></label>{bid.barter_item.item_description}
            </div>

            <div className='row'>
                <label><strong>Date Required: </strong></label>{bid.barter_item.date_required}
            </div>

            <div className='row'>
                <label><strong>Quantity Requested: </strong></label>{bid.barter_item.quantity_requested}
            </div>

            <div className='row'>
                <label><strong>Quantity I Offered: </strong></label>{bid.qty_offered}<br/>
                <button className='offer-help'>Change my bid</button>
                <button className='offer-help'>Withdraw my bid</button><br/>
            </div>


            <div className='row'>
                <label><strong>Other Bidders: </strong></label>
                {bid.bids_by_others.map(bid => {
                    return(
                        <div key={uuid()}>
                            <div className='row'>
                                <label><strong>Bidder: </strong></label>{bid.bidder.first_name}, {bid.bidder.last_name}
                            </div>
                            <div className='row'>
                                <label><strong>Quantity Offered: </strong></label>{bid.qty_offered}
                            </div>
                        </div>
                    )
                })
                }
            </div>

                </div>
    )
}

export default PanelBarterBidsCard