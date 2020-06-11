import React from 'react'

const FactCard = (props) => {
    const {fact} = props

    const handleLinkClick = (event) => {
        window.open(fact.link)
    }

    return (
        <div className='fact-card'>
             <div className='row'>
                <label>
                    <strong>Title: </strong>
                </label>
                    {fact.title}
            </div>

            <div className='row'>
                <label>
                    <strong>Description: </strong>
                </label>
                    {fact.description}
            </div>

            <div className='row'>
                <label>
                    <strong>Reporting Organization: </strong>
                </label>
                    {fact.organization}
            </div>

            <div className='row'>
                <label>
                    <strong>Date Reported: </strong>
                </label>
                    {fact.date_published}
            </div>

            <div className='row'>
                <label>
                    <strong>Source: </strong>
                </label>
                    {fact.source}
            </div>

            <div className='row'>
                <label>
                    <strong>Link: </strong>
                </label>
                <button className='link-button' onClick={handleLinkClick}>View source in new tab</button>
            </div>
        </div>
    )
}

export default FactCard
