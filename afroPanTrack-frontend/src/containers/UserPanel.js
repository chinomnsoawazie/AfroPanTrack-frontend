import React from 'react'
import PanelHelpRequestCard from '../cards/PanelHelpRequestCard'
import PanelHelpOfferCard from '../cards/PanelHelpOfferCard'
import PanelBarterRequestCard from '../cards/PanelBarterRequestCard'
import PanelBarterBidsCard from '../cards/PanelBarterBidsCard'
import PanelReportCard from '../cards/PanelReportCard'
import PanelQuarantineCenterCard from '../cards/PanelQuarantineCenterCard'
import PanelClosedBids from '../cards/PanelClosedBids'
import PanelCompletedHelpCard from '../cards/PanelCompletedHelpCard'

const UserPanel = (props) => {
    const{user} = props
    // console.log(user)
    const completedHelp = user.helps.filter(help => help.done_status === true )
    const ongoingHelp = user.helps.filter(help => help.done_status === false)

    return (
    <>
        <div className='row'>
            <button className='offer-help'>View My Profile</button>
        </div>
        
        <div className='row panel-heading'>
            <button  className='panel-heading-button'><strong>Helps</strong></button>
        </div> 
        <div className='row three-column-updates-view'>
            <div className='column'>
                <h3>Ongoing Help Requests</h3>
            {ongoingHelp.map(request => <PanelHelpRequestCard key={request.id} help={request}/>)}
            </div>

            <div className='column'>
                <h3>Help I'm Offering</h3>
            {user.help_offers_made.map(helpOffer => <PanelHelpOfferCard key={helpOffer.id} help={helpOffer} />)}
            </div>

            <div className='column'>
                <h3>Completed Help Requests</h3>
            {completedHelp.map(help => <PanelCompletedHelpCard key={help.id} help={help} />)}
            </div>
        </div>

        <div className='row panel-heading'>
            <button  className='panel-heading-button'><strong>Barters</strong></button>
        </div> 
        <div className='row three-column-updates-view'>
            <div className='column'>
                <h3>Items I am Selling</h3>
            {user.barters.map(barter => <PanelBarterRequestCard key={barter.id} barter={barter}/>)}
            </div>

            <div className='column'>
                <h3>Items I am Bidding On</h3>
            {user.barter_user_bid_on.map(bid => <PanelBarterBidsCard key={bid.id} bid={bid} />)}
            </div>


            <div className='column'>
                <h3>Items Bid On</h3>
            {user.barters_completed.map(request => <PanelClosedBids key={request.id} request={request} />)}
            </div>
        </div>

        <div className='row panel-heading'>
            <button  className='panel-heading-button'><strong>Reports</strong></button>
        </div> 
        <div className='row updates-view'>
            <div className='column'>
                <h3>Reports I filed</h3>
            {user.reports.map(report => <PanelReportCard key={report.id} request={report}/>)}
            </div>

            <div className='column'>
                <h3>Quarantine Centres I reported</h3>
            {user.quarantine_centres.map(request => <PanelQuarantineCenterCard key={request.id} request={request} />)}
            </div>
        </div>
   </>
    )
}

export default UserPanel