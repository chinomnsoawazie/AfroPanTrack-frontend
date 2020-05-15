import React, { Component } from 'react'
import { createReport } from '../redux/actions'

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

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.file)
        const file =this.state.file
        if(this.state.city_town_or_village && this.state.nearest_landmark && this.state.description){
            let report = {
                user_id: this.props.user_id,
                city: this.props.appUserLocation.city,
                state: this.state.state,
                country: this.props.appUserLocation.country,
                lga: this.state.lga,
                city_town_or_village: this.state.city_town_or_village,
                nearest_landmark: this.state.nearest_landmark,
                persons_involved: this.state.persons_involved,
                description: this.state.description,
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
            alert('Please fill all fields')
        }
    }

    render() {
        console.log(this.props)
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
                       <strong>State</strong>
                   </label>
               </div>
               <div className='row'>
                   <input name='state' type='text' value={this.state.state} onChange={this.handleChange} />
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
                       <strong>City, Town, or Village</strong>
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
