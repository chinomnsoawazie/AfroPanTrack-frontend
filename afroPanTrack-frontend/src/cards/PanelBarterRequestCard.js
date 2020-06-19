import React from 'react'
import uuid from 'react-uuid'

function PanelBarterRequestCard(props) {
    const {barter} = props
    // console.log(barter)

    const wereThereBids = () => {
        if(barter.done && barter.bids.length > 0){
            return "Yes"
        }else if(barter.done && barter.bids.length <= 0){
            return "No"
        }else if(!barter.done && barter.bids.length > 0){
            return "Yes"
        }else if(!barter.done && barter.bids.length <= 0){
            return "No"
        }
    }

    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Description: </strong></label>{barter.item_description}
            </div>

            <div className='row'>
                <label><strong>Quantity Requested: </strong></label>{barter.quantity_requested}
            </div>

            <div className='row'>
                <label><strong>Date Required: </strong></label>{barter.date_required}
            </div>
            
            <div className='row'>
                <label><strong>Batter Completed? </strong></label>{barter.done ? "Yes" : "No"}
            </div>

                {barter.done ?
                <>  
                    <div className='row'>
                        <label><strong>Battered With: </strong></label>{barter.barter_receiver.first_name}, {barter.barter_receiver.last_name}
                    </div>
                    <div className='row'>
                    <label><strong>Quantity Received: </strong></label>{barter.quantity_received}
                    </div>
                </>
                    :
                    null
                } 

            <div className='row'>
                <label><strong>{barter.done ? "Were there bids?" : "Are There Bids?"} </strong></label>
                {wereThereBids()}
            </div>

            {!barter.done && barter.bids.length > 0 ?
                <>  
                    <div className='row'>
                        <label><strong>Bidders: </strong></label>
                        {barter.bids.map(bid => {
                            return (
                                <div key={uuid()}> 
                                    {bid.bid_owner.first_name}, {bid.bid_owner.last_name} 
                                    <button className='offer-help'>Accept bid</button><br/>
                                </div>)} )
                        }
                    </div>
                </>
                    :
                    null
                }

            {barter.done && barter.bids.length > 0 ?
                <>  
                    <div className='row'>
                        <label><strong>Bidders: </strong></label>
                        {barter.bids.map(bid => {
                            return (
                                <div key={uuid()}> 
                                    {bid.bid_owner.first_name}, {bid.bid_owner.last_name} 
                                </div>)} )
                        }
                    </div>
                </>
                    :
                    null
                }
                </div>
    )
}

export default PanelBarterRequestCard
