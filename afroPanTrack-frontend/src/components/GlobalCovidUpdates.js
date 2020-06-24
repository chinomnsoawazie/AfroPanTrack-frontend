import React from 'react'
import { GlobalChartCard } from '../cards/globalChartCard'

function GlobalCovidUpdates(props) {
    const {globalData, globalChartData} = props
    // console.log(globalData)
    return (
        <div>
            <h1>Global covid facts live here</h1>
            <GlobalChartCard globalData={globalData} globalChartData={globalChartData}/>
        </div>
    )
}

export default GlobalCovidUpdates
