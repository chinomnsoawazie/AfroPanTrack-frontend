import React from 'react'
import uuid from 'react-uuid'


const HelpCard = (props) => {
    const {request, currentUser, allHelpers} = props


    const helpersAssociatedWithThisRequest = allHelpers.filter(helper => helper.help_id === request.id)

    const HelpersThatHelped = helpersAssociatedWithThisRequest.filter(helper => helper.followed_through === true)
    const UserIdsOfThoseThatHelped = HelpersThatHelped.map(helper => helper.user_id)
    const thoseThatHelped = request.helpers.filter(helper => UserIdsOfThoseThatHelped.includes(helper.id))

    // console.log(helpersAssociatedWithThisRequest)
    // console.log(HelpersThatHelped)
    // console.log(UserIdsOfThoseThatHelped)


    console.log(thoseThatHelped)

    // console.log(props)


    // const helpers =


    //add a backend counter to state how many requests they've made





//modify Helper in the backend to include followed_through and make_me_anonymous attributes. This will be used in the 
//final render of done helps so that only those who actually helped will show up as they prefer
            //create login counter controller at the backend to keep track of usage/logins

// when someone offers to help, a Helper object will be created using the user_id of the helper and the help_id of the request

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
                {thoseThatHelped.map(helper => { 
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
        <button className='offer-help'>Offer to help</button>}


       {/* <div className='row'>
           <label>
               <strong>Link: </strong>
           </label>
           <button className='link-button' onClick={handleLinkClick}>View source in new tab</button>
       </div> */}
   </div>
    )
}

export default HelpCard
