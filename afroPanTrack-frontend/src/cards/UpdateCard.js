import React from 'react'

const UpdateCard = (props) => {
    const {update} = props
    console.log(props)
    return (
        <div className='update-card'>
            <div className='row'>
                <label>
                    <strong>Description: </strong>
                </label>
                    {update.description}
            </div>

            <div className='row'>
                <label>
                    <strong>Reporting Organization: </strong>
                </label>
                    {update.organization}
            </div>

            <div className='row'>
                <label>
                    <strong>Date Reported: </strong>
                </label>
                    {update.date}
            </div>

            <div className='row'>
                <label>
                    <strong>Source: </strong>
                </label>
                    {update.source_or_link}
            </div>

        </div>
    )
}

export default UpdateCard
