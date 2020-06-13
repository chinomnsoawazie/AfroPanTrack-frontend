import React from 'react'
import FactCard from '../cards/FactCard'

const CovidFacts = (props) => {

    const {loggedIn, first_name, allFacts} = props

    const symptoms = allFacts.AllFacts.filter(fact => fact.category === 'symptoms')

    const transmissionFacts = allFacts.AllFacts.filter(fact => fact.category === 'transmission')

    const mythsOrRumors = allFacts.AllFacts.filter(fact => fact.category === 'mythOrRumor')

    return (
        <>
        <div>
            {loggedIn ? 
            <p>Hello <strong>{first_name}</strong>, you are viewing COVID-19 facts. These includes symptoms, transmission facts, and myths/rumors </p>
            :
            <p>You you are viewing COVID-19 facts. These includes symptoms, transmission facts, and myths.rumors</p>
        }

        </div>
        <div className='row facts-view'>
            <div className='column'>
                <h3>Symptoms</h3>
            {symptoms.map(fact => <FactCard key={fact.id} fact={fact}/>)}
            </div>
            <div className='column'>
                <h3>Transmission facts</h3>
                {transmissionFacts.map(fact => <FactCard key={fact.id} fact={fact}/>)}

            </div>
            <div className='column'>
                <h3>Myths/Rumors</h3>
                {mythsOrRumors.map(fact => <FactCard key={fact.id} fact={fact}/>)}

            </div>
        </div>
        </>
    )
}

export default CovidFacts