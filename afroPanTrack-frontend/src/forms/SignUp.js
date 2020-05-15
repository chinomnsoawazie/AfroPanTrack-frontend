import React, { Component } from 'react'
import {createUser} from '../redux/actions'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class SignUp extends Component {

    state ={
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: '',
        email: '',
        country: '',
        state: '',
        city: '',
        street_address: '',
        usernameAvailable: "Click 'check' see username availability",
        phone_no: '',
        facebook_name: '',
        twitter_handle: ''
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    checkUsername= (event) =>{
        event.preventDefault()
        axios.get(`http://localhost:3000/users/checkusername/${this.state.username}`)
        .then(r =>this.setState({ usernameAvailable: r.data }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.password === this.state.confirm_password){
            if(this.state.first_name && this.state.last_name && this.state.username && this.state.email 
                && this.state.password && this.state.country && this.state.state && this.state.city
                && this.state.phone_no){
                let props = this.props
                let user = {
                    "first_name": this.state.first_name,
                    "last_name": this.state.last_name,
                    "username": this.state.username,
                    "password": this.state.password,
                    "phone_no": this.state.phone_no,
                    "facebook_name": this.state.facebook_name,
                    "twitter_handle": this.state.twitter_handle,
                    "email": this.state.email,
                    "country": this.state.country,
                    "state": this.state.state,
                    "city": this.state.city,
                    "street_address": this.state.street_address,
                    "admin": true
                }
                createUser(user, props)
            }else{
                alert('Please fill in all fields')
                this.setState({
                    password: '',
                    confirm_password: '',
                })
                document.getElementById('password').value = null
            }
        }else{
            alert('Passwords do not match')
            this.setState({
                password: '',
                confirm_password: '',
            })
            document.getElementById('password').value = null
            document.getElementById('confirm-password').value = null 
        }
    }

    render() {
        return (
            <>
            <div className='forms'>
                <form >

                    <div className='row'>
                        <label>
                            <strong>First name:</strong>
                        </label>
                    </div>
                    <div className='row'>
                        <input className='input' type="text" name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                        <label>
                            <strong>Last name:</strong>
                        </label>
                    </div>
                    <div className='row'>
                        <input className='input' type="text" name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Email:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Phone no:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='phone_no' value={this.state.phone_no} onChange={this.handleChange} />
                    </div>
                    <div className='row'>
                            <label>
                                <strong>Facebook name:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='facebook_name' value={this.state.facebook_name} onChange={this.handleChange} />
                    </div>
                    <div className='row'>
                            <label>
                                <strong>Twitter handle:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='twitter_handle' value={this.state.twitter_handle} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Username:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                            <button onClick={this.checkUsername} className='page-button'> check </button> 
                            <input className='check' type="text" value={this.state.usernameAvailable} readOnly />
                    </div>
                    
                    <div className='row'>
                            <label>
                                <strong>Country:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='country' value={this.state.country} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>State:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='state' value={this.state.state} placeholder='Eg NY, CA, MO' onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>City:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='city' value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Street/Village/Town:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' type="text" name='street_address' value={this.state.street_address} onChange={this.handleChange} />
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Password:</strong>(min: 6 characters)
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' name='password' id='password' type='password' value={this.state.password} onChange={this.handleChange} />
                            {this.state.password.length < 6 ? "Password below 6 characters" : "✅"}
                    </div>

                    <div className='row'>
                            <label>
                                <strong>Confirm password:</strong>
                            </label>
                        </div>
                        <div className='row'>
                            <input className='input' name='confirm_password' id='confirm-password' type='password' value={this.state.confirm_password} onChange={this.handleChange} />
                            {this.state.password === this.state.confirm_password ? "✅" : "Passwords don't match"}
                    </div>
                        
                        <div className='row'>
                            <button onClick={this.handleSubmit} className='page-button' type='submit' value='login'>Create account</button>
                        </div>
                </form><br/>

            <div align='center'>
                Already have an account?<br/>
                <button onClick={() => this.props.history.push('/login')} className='page-button'>login</button>
            </div>

            </div>
            </>
        )
    }
}

export default withRouter(SignUp)