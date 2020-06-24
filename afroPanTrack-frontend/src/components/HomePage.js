import React from 'react'
import {withRouter} from 'react-router-dom'

const HomePage = () => {
    return (
            <div className='entry-point'>
                <div className='row'>
                    <h3><strong > Welcome to AfroPanTrack WebApp</strong></h3>

                </div>

                <div className='row'>
                    <p>The purpose of this web app are as follows</p>
                    <ul>
                        <li>Provide a trustworthy source of tracking pandemics like COVID-19 in Africa, starting from Nigeria</li>
                        <li>Provide facts in such a way as to not make people lax while at the same time preventing mass hysteria</li>
                        <li>Provide relevant updates from Government sources within Africa and all over the world</li>
                        <li>Combat dangerous false narratives from governments by enabling citizens report cases of infections, treatment centers, conditions of quarantine centers, etc</li>
                        <li>Enable the vulnerable and people in need request help and possibly connect with helpers</li>
                        <li>Enable some sort of barter system just in case things come to that</li>
                    </ul>
                    <p>To view information, including using the INFECTION MAP, you do not need an account. However, to report an infection, request help, batter items, or report on quarantine centers, you will need an account.
                        This is to make sure these reports are being filed by real people, and also enable verification of those reports.</p>
                    <p>No one will see any information about who made a report, or who verified it. We take your privacy very seriously</p>
                    <p>All available and necessary navigation on this app are in the Navigation bar above</p>
                </div> <br/>
            </div>
    )
}

export default withRouter(HomePage)