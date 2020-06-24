import React from 'react'
import uuid from 'react-uuid'
import {connect} from 'react-redux'
import { offerHelp, createHelper } from '../redux/actions'

const HelpCard = (props) => {
    const {request, currentUser, token, dispatch} = props

    //All helper objects associated with this request
    const helperObjectsAssociatedWithThisRequest = request.helpers

    //Helper objects associated with this request who actually helped
    const allHelperObjectsThatHelped = helperObjectsAssociatedWithThisRequest.filter(helper => helper.followed_through === true)

    //Helper objects associated with this request who actually helped and want to be shown
    const HelperObjectsThatHelpedAndWantToBeShown = allHelperObjectsThatHelped.filter(helper => helper.make_me_anonymous === false && helper.followed_through === true)
    // console.log(HelpersThatHelpedAndWantToBeShown)

    //  //User IDs of all helper objects associated with this request
     const UserIdsOfAllHelpersAssociatedWithThisRequest = helperObjectsAssociatedWithThisRequest.map(helperObject => helperObject.helper.id)

     //User objects of those that actually helped. This is to know all that helped so the array length of the unique users can be calculated
     const userObjectsOfAllHelpers= allHelperObjectsThatHelped.map(helperObject => helperObject.helper)

     const distinctHelpers = Array.from(new Set(userObjectsOfAllHelpers.map(user => user.id)))
     .map(id => {
         return{
             id: id,
             first_name: userObjectsOfAllHelpers.find(s => s.id === id).first_name,
             last_name: userObjectsOfAllHelpers.find(s => s.id === id).last_name,
 
         }
     })

    //User objects of those that actually helped and wish to be shown. This is for all users to see
    const userObjectsOfHelpersWhoChoseToBeShown = HelperObjectsThatHelpedAndWantToBeShown.map(helperObject => helperObject.helper)

    //Array of distinct User objects of those that actually helped and wish to be shown so as to avoid duplication of helper names.
    const distinctHelpersThatWantToBeShown = Array.from(new Set(userObjectsOfHelpersWhoChoseToBeShown.map(user => user.id)))
    .map(id => {
        return{
            id: id,
            first_name: userObjectsOfHelpersWhoChoseToBeShown.find(s => s.id === id).first_name,
            last_name: userObjectsOfHelpersWhoChoseToBeShown.find(s => s.id === id).last_name,

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
               <strong>Request made on: </strong>
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
                <strong>No of People That Helped: </strong>
            </label>
            {distinctHelpers.length}
            </div>

            <div className='row'>
            <label>
                <strong>Helpers who Chose To Be Shown: </strong>
            </label>
            {distinctHelpersThatWantToBeShown.length > 0 ?
                distinctHelpersThatWantToBeShown.map(helper => { 
                    return (
                        <div key={uuid()}>
                        {helper.first_name} {helper.last_name},
                        </div>)
                })
                :
                "No helper wants to be shown"
            }
            </div>
        </>
        :
        null
        }

        {request.done_status ?
            null
            :
            <>
            {UserIdsOfAllHelpersAssociatedWithThisRequest.includes(currentUser.id)? 
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