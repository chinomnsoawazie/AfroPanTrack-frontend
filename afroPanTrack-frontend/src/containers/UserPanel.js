import React from 'react'

const UserPanel = (props) => {
    const{allHelps, user} = props

    // const userHelps = allHelps.AllHelp.filter(help => help.user_id === user.id )
    // const completedHelp = userHelps.filter(help => help.done_status === true )
    // const ongoingHelp = userHelps.filter(help => help.done_status === false)


    // console.log(ongoingHelp)
    // console.log(completedHelp)

    console.log(allHelps)


    return (
        <div className='updates-view'>
        <div className='column'>
            <h3>Ongoing helps</h3>
       {/* {ongoingHelp.map(request => <HelpCard key={request.id} request={request} helper={helper}/>)} */}
       </div>
       <div className='column'>
           <h3>Done helps</h3>
       {/* {completedHelp.map(request => <HelpCard key={request.id} request={request} />)} */}
       </div>
   </div>
    )
}

export default UserPanel
