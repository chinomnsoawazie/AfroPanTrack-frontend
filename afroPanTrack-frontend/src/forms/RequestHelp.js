
import React, { Component } from 'react'
import {statesList, citiesList} from '../components/CountriesStatesAndCities'
import {setCurrentStateID, setCurrentCityID, createHelpRequest } from '../redux/actions'
import uuid from 'react-uuid'

export class RequestHelp extends Component {

    state = {
        description: '',
        country: '',
        state: '',
        city: '',
        lga: '',
        city_town_or_village: '',
        nearest_landmark: '',
        date_required: '',
        qty_requested: '',
        requestor_id: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleChangeState = (event) => {
        event.preventDefault()
        setCurrentStateID(event.target.value, this.props.dispatch)
        let newState = statesList.find(({id}) => id.toString() === event.target.value)
        this.setState({state: newState.name})
    }

    handleChangeCity = (event) => {
        event.preventDefault()
        setCurrentCityID(event.target.value, this.props.dispatch)
        let newCity = citiesList.find(({id}) => id.toString() === event.target.value)    
        this.setState({city: newCity.name})    
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')

        if(this.state.city_town_or_village && this.state.city && this.state.state && this.state.nearest_landmark && this.state.description){
            let helpRequest = {
                description: this.state.description,
                date_requested: todaysDate,
                country: this.props.currentCountry.name,
                state: this.state.state,
                city: this.state.city,
                lga: this.state.lga || null,
                city_town_or_village: this.state.city_town_or_village,
                nearest_landmark: this.state.nearest_landmark,
                date_required: this.state.date_required,
                qty_requested: this.state.qty_requested || null,
                requestor_id: this.props.user.id
            }
            createHelpRequest(helpRequest, this.props.dispatch, this.props.push, this.props.user)
        }else{
            alert('Please fill/select all fields')
        }
    }
    render() {        
        const todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
        console.log(this.props.currentCountry)
        return (
            <div className='entry-point'>
                 <form onSubmit={this.handleSubmit}>
               <div className='row'>
                   <label>
                       <strong>Description of request</strong>
                   </label>
               </div>
               <div className='row'>
                   <textarea type="textarea" name='description' value={this.state.description} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                   <label>
                       <strong>Quantity required/requested</strong>(optional)
                   </label>
               </div>
               <div className='row'>
                   <input className='input' type="text" name='qty_requested' value={this.state.qty_requested} onChange={this.handleChange} />
               </div><br/>
               
               <div className='row'>
                   <label>
                       <strong>Date required</strong>
                   </label>
               </div>
               <div className='row'>
                   <input type='date' value={this.state.date_required} name='date_required'  min={todaysDate} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                   <label>
                       <strong>Country: </strong>
                   </label>{this.props.currentCountry.name}
               </div><br/>

               <div className='row job-card-row'>
                    <label>
                        <strong>State/Province: </strong>
                    </label>{this.state.state}
                    <select value={this.state.state} onChange={this.handleChangeState} className='location-select'>
                        <option value='Select state'>Choose/Change state</option> 
                        {statesList.filter(state => state.country_id === this.props.currentCountry.id.toString()).map(state => <option key={uuid()} value={state.id}>{state.name}</option>)}
                    </select>
                </div><br/>


               <div className='row job-card-row'>
                    <label>
                        <strong>City: </strong>
                    </label>{this.state.city}
                    <select onChange={this.handleChangeCity} className='location-select'>
                        <option defaultValue='Select city'>Chose/Change city</option>
                        {citiesList.filter(city => city.state_id === this.props.currentStateID).length <= 0 ?
                            <option key={uuid()} value={'State has no city'}>State has no cities</option>
                            :
                            citiesList.filter(city => city.state_id === this.props.currentStateID).map(city => <option key={uuid()} value={city.id}>{city.name}</option>)
                        }                        
                    </select>
                </div><br/>

               <div className='row'>
                   <label>
                       <strong>LGA</strong>
                   </label>
               </div>
               <div className='row'>
                   <input name='lga' type='text' value={this.state.lga} onChange={this.handleChange} />
               </div><br/>
               
               <div className='row'>
                   <label>
                       <strong>Town, or Village</strong>
                   </label>
               </div>
               <div className='row'>
                   <input name='city_town_or_village' type='text' value={this.state.city_town_or_village} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                   <label>
                       <strong>Nearest landmark</strong>
                   </label>
               </div>
               <div className='row'>
                   <input name='nearest_landmark' type='text' value={this.state.nearest_landmark} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                   <button className='page-buttons' type='submit' value='login'>Create request</button>
               </div>
           </form>
       </div>
                
        )
    }
}


export default RequestHelp