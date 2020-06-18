import React from 'react'
import uuid from 'react-uuid'

function PanelBarterBidsCard(props) {
    const {bid} = props

    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Requestor: </strong></label>{bid.requestor.first_name}, {bid.requestor.last_name}
            </div>

            <div className='row'>
                <label><strong>Requestor Location: </strong></label>{bid.requestor.street_address}, {bid.requestor.city}, {bid.requestor.state}<br/><strong>LGA:</strong>{bid.requestor.lga}
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
                <label><strong>Quantity I Offered: </strong></label>{bid.qty_offered}
                <button className='offer-help'>Change my bid</button>
                <button className='offer-help'>Withdraw my bid</button><br/>
<br/>
            </div>


            <div className='row'>
                <label><strong>Other Bidders: </strong></label>
                {bid.bids_by_others.map(bid => {
                    return(
                        <div key={uuid()}>
                            <div className='row'>
                                <label><strong>Bidder: </strong></label>{bid.bidder.first_name}
                            </div>
                            <div className='row'>
                                <label><strong>Quantity Offered: </strong></label>{bid.qty_offered}
                            </div>
                        </div>
                    )
                })
                }
            </div>


            {/* <div className='row'>
                <label><strong>{bid.done ? "Were there bids?" : "Are There Bids?"} </strong></label>
                {wereThereBids()}
            </div> */}
{/* 
            {!bid.done && bid.bids.length > 0 ?
                <>  
                    <div className='row'>
                        <label><strong>Bidders: </strong></label>
                        {bid.bids.map(bid => {
                            return (
                                <div key={uuid()}> 
                                    {bid.bidder.first_name}, {bid.bidder.last_name} 
                                    <button className='offer-help'>Accept bid</button><br/>
                                </div>)} )
                        }
                    </div>
                </>
                    :
                    null
                }

            {bid.done && bid.bids.length > 0 ?
                <>  
                    <div className='row'>
                        <label><strong>Bidders: </strong></label>
                        {bid.bids.map(bid => {
                            return (
                                <div key={uuid()}> 
                                    {bid.bidder.first_name}, {bid.bidder.last_name} 
                                </div>)} )
                        }
                    </div>
                </>
                    :
                    null
                } */}
                </div>
    )
}

export default PanelBarterBidsCard
