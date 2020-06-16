import React, { Component } from 'react'
import {statesList, citiesList} from '../components/CountriesStatesAndCities'
import { createReport, setCurrentStateID, setCurrentCityID } from '../redux/actions'
import uuid from 'react-uuid'

export class ReportInfection extends Component {
    state = {
        city: '',
        state: '',
        country: '',
        lga: '',
        city_town_or_village: '',
        nearest_landmark: '',
        persons_involved: '',
        description: '',
        lat: '',
        lng: '',
        medical_attention_observed: '',
        medical_attention_description: '',
        can_we_follow_up: '',
        verified: '',
        verified_by: '',
        verification_notes: '',
        file: null
    }
    

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleUpload = (event) => {
        this.setState({
            file: event.target.files[0]
        })
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
        const file =this.state.file

        //dummyLocations and chosenLocation below are for dev purposes only
        const dummyLocations = [{lat: 6.44183, lng: 3.36899},
                                {lat: 9.08603, lng: 7.48114},
                                {lat: 6.44383, lng: 3.36869},
                                {lat: 9.08203, lng: 7.48214}]
        const chosenLocation = dummyLocations[Math.floor(Math.random()*dummyLocations.length)]

        if(this.state.city_town_or_village && this.state.city && this.state.state && this.state.nearest_landmark && this.state.description){
            let report = {
                user_id: this.props.user_id,
                city: this.state.city,
                state: this.state.state,
                country: this.props.currentCountry.name,
                lga: this.state.lga,
                city_town_or_village: this.state.city_town_or_village,
                nearest_landmark: this.state.nearest_landmark,
                persons_involved: this.state.persons_involved,
                description: this.state.description,
                //Dummy lat and lng used for development purposes. to be replaced
                //by that pulled from the device on live app
                // lat: chosenLocation.lat,
                // lng: chosenLocation.lng,
                //comment back location coordinates below and comment out the one 
                //above for live app
                lat: this.props.appUserCoordinates.lat,
                lng: this.props.appUserCoordinates.lng,
                medical_attention_observed: this.state.medical_attention_observed,
                medical_attention_description: this.state.medical_attention_description,
                can_we_follow_up: this.state.can_we_follow_up,
                verified: false,
                verified_by: '',
                verification_notes: '',
                file: file
            }
            createReport(this.props.dispatch, this.props.push, this.props.user, report)
        }else{
            alert('Please fill/select all fields')
        }
    }

    
    render() {
        return (
            <div className='entry-point'>
            <form onSubmit={this.handleSubmit}>
               <div className='row'>
                   <label>
                       <strong>Nearest landmark</strong>
                   </label>
               </div>
               <div className='row'>
                   <input type="text" name='nearest_landmark' value={this.state.nearest_landmark} onChange={this.handleChange} />
               </div><br/>
               
               <div className='row'>
                   <label>
                       <strong>Persons involved</strong>
                   </label>
               </div>
               <div className='row'>
                   <input name='persons_involved' type='text' value={this.state.persons_involved} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                   <label>
                       <strong>Describe what happened</strong>
                   </label>
               </div>
               <div className='row'>
               <textarea type="text" placeholder='eg Ola Musa Obi was running high temp. Difficulty breathing' name='description' value={this.state.description} onChange={this.handleChange} />
               </div><br/>

               <div className='row'>
                    <label>
                        <strong>Medical attention observed?: </strong>
                    </label>
                    <select onChange={this.handleChange} name='medical_attention_observed'>
                        <option defaultValue={false} >No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div><br/>


                {this.state.medical_attention_observed ?
                <>
                <div className='row'>
                   <label>
                       <strong>Describe medical attention</strong>
                   </label>
               </div>
               <div className='row note'>
                   <textarea type="text" placeholder='eg First aid administered' name='medical_attention_description' value={this.state.medical_attention_description} onChange={this.handleChange} />
               </div>
               </>
               :
               null
            }
               <br/>
               <div className='row'>
                    <label>
                        <strong>Can we follow up?: </strong>
                    </label>
                    <select onChange={this.handleChange} name='can_we_follow_up'>
                        <option defaultValue={false} >No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div><br/>

                <strong>Location(you can type it in or use your current location)</strong><br/><br/>

                <div className='row'>
                   <label>
                       <strong>Country</strong>
                   </label>
               </div>
               <div className='row'>
                   <p>{this.props.currentCountry.name}</p>
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
                        <strong>Have a picture?:</strong>
                    </label>
                </div>
                <div className='row'>
                    <input className='page-button'  type='file' name='file' id='file' onChange={this.handleUpload}/>
                </div><br/><br/>

               <div className='row'>
                   <button className='page-buttons' type='submit' value='login'>Create report</button>
               </div>
           </form>
       </div>
        )
    }
}

export default ReportInfection
