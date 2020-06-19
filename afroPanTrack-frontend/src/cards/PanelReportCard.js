import React from 'react'

function PanelReportCard(props) {
    const {report} = props

    return (
        <div className='fact-card'>
            <div className='row'>
                <label><strong>Location: </strong></label>{report.city}, {report.state}
            </div>

            <div className='row'>
                <label><strong>Description: </strong></label>{report.description}
            </div>

            <div className='row'>
                <label><strong>Date reported: </strong></label>{report.date_reported}
            </div>
            <button className='offer-help'>Edit Report</button>
        </div>
    )
}

export default PanelReportCard
