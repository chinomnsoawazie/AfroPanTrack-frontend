import React from 'react'
import uuid from 'react-uuid'
import {connect} from 'react-redux'
import { offerHelp, createHelper } from '../redux/actions'

const HelpCard = (props) => {
    const {request, currentUser, allHelpers, token, dispatch} = props

    //All helper objects associated with this request
    const helpersAssociatedWithThisRequest = allHelpers.filter(helper => helper.help_id === request.id)

    //Helper objects associated with this request who actually helped
    const allHelpersThatHelped = helpersAssociatedWithThisRequest.filter(helper => helper.followed_through === true)

    //Helper objects associated with this request who actually helped and want to be shown
    const HelpersThatHelpedAndWantToBeShown = allHelpersThatHelped.filter(helper => helper.make_me_anonymous === false && helper.followed_through === true)
    // console.log(HelpersThatHelpedAndWantToBeShown)

     //User IDs of all helper objects associated with this request
     const UserIdsOfAllHelperObjectsAssociatedWithThisRequest = helpersAssociatedWithThisRequest.map(helper => helper.user_id)

    //User IDs of all that actually helped
    const UserIdsOfAllThatHelped = allHelpersThatHelped.map(helper => helper.user_id)

    //User IDs of all that actually helped and chose to be shown
    const UserIdsOfHelpersThatWantToBeShown = HelpersThatHelpedAndWantToBeShown.map(helper => helper.user_id)

    //User objects of those that actually helped. This is for admins and moderators
    const allThatHelped = request.helpers.filter(helper => UserIdsOfAllThatHelped.includes(helper.id))

    //User objects of those that actually helped and wish to be shown. This is for all users to see
    const helpersWhoChoseToBeShown = request.helpers.filter(userThatHelped => UserIdsOfHelpersThatWantToBeShown.includes(userThatHelped.id))

    //Array of distinct User objects of those that actually helped and wish to be shown so as to avoid duplication of helper names.
    const distinctHelpers = Array.from(new Set(helpersWhoChoseToBeShown.map(user => user.id)))
    .map(id => {
        return{
            id: id,
            first_name: helpersWhoChoseToBeShown.find(s => s.id === id).first_name,
            last_name: helpersWhoChoseToBeShown.find(s => s.id === id).last_name,

        }
    })

    const handleOfferToHelp = (event) => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let todaysDate = mm + '/' + dd + '/' + yyyy;

        if(event.target.name === 'regular-help'){
            let helpParams = {
                "helper_id": currentUser.id,
                "help_offer_date": todaysDate
            }

            let newHelper = {
                "user_id": currentUser.id,
                "help_id": request.id,
            }
            offerHelp(helpParams, token, dispatch)
            createHelper(newHelper, dispatch)

        }else{
            let helpParams = {
                "helper_id": currentUser.id,
                "help_offer_date": todaysDate
            }

            let newHelper = {
                "user_id": currentUser.id,
                "help_id": request.id,
                "make_me_anonymous": true
            }
            offerHelp(helpParams, token, dispatch)
            createHelper(newHelper, dispatch)
        }
    }


    return (
        <div className='fact-card'>
        <div className='row'>
           <label>
               <strong>Description: </strong>
           </label>
               {request.description}
       </div>

       <div className='row'>
           <label>
               <strong>Date request was made: </strong>
           </label>
               {request.date_requested}
       </div>

       <div className='row'>
           <label>
               <strong>Request needed by: </strong>
           </label>
               {request.date_required}
       </div>

       <div className='row'>
           <label>
               <strong>Date Reported: </strong>
           </label>
               {request.date_published}
       </div>

       <div className='row'>
           <label>
               <strong>State: </strong>
           </label>
               {request.state}
       </div>

       <div className='row'>
           <label>
               <strong>City: </strong>
           </label>
               {request.city}
       </div>

       <div className='row'>
           <label>
               <strong>Town/Village: </strong>
           </label>
               {request.city_town_or_village}
       </div>

       <div className='row'>
           <label>
               <strong>State: </strong>
           </label>
               {request.state}
       </div>

       { request.done_status?
       <>
            <div className='row'>
                <label>
                    <strong>Date Completed: </strong>
                </label>
                    {request.date_completed}
            </div>

            <div className='row'>
            <label>
                <strong>Comments: </strong>
            </label>
                {request.comments}
            </div>

            <div className='row'>
            <label>
                <strong>Helped By: </strong>
            </label>
                {distinctHelpers.map(helper => { 
                    return (
                        <div key={uuid()}>
                        {helper.first_name} {helper.last_name},
                        </div>)
                })}
            </div>
        </>
        :
        null
        }

        {request.done_status ?
            null
            :
            <>
            {UserIdsOfAllHelperObjectsAssociatedWithThisRequest.includes(currentUser.id)? 
                    <button className='offer-help' name='regular-help'>You've already offered help</button>
                :
                    <>
                    <button className='offer-help' name='regular-help' onClick={handleOfferToHelp}>Offer regular help</button>
                    <button className='offer-help' name='anonymous-help' onClick={handleOfferToHelp}>Offer anonymous help</button>
                    </>
            }
            </>
        }
   </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.allUserInfo.token
    }
}
export default connect(mapStateToProps)(HelpCard)