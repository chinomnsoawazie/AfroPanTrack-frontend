import React, { Component } from 'react'
import {login, setAPIKeys, setAppUserLocation, setReports} from '../redux/actions'

export class Login extends Component {

    state ={
        username: '',
        password: ''
    }

    componentDidMount() {
        setAPIKeys(this.props.dispatch)
        setReports(this.props.dispatch)
        setAppUserLocation(this.props.dispatch, this.props.google_maps_api_key)
    }
    
    
    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        let push = this.props.push
        let dispatch = this.props.dispatch
        let user = {
            "username": this.state.username,
            "password": this.state.password
        }
        setAppUserLocation(dispatch, this.props.google_maps_api_key)
        login(user, push, dispatch)
    }


    render() {
        return (

            <div className='entry-point'>
                 <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <label>
                            <h2>Username</h2>
                        </label>
                    </div>
                    
                    <div className='row'>
                        <input type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                    </div>
                    
                    <div className='row'>
                        <label>
                            <h2>Password</h2>
                        </label>
                    </div>
                    
                    <div className='row'>
                        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
                    </div><br/>
                    
                    <div className='row'>
                        <button className='page-buttons' type='submit' value='login'>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login