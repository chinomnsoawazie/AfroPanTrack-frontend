import React, { Component } from 'react'
import './App.css';
import {connect} from 'react-redux'
import { setAPIKeys, setReports } from './redux/actions';
import NavBar from './containers/NavBar';
import MainContainer from './containers/MainContainer';


export class App extends Component {

  componentDidMount() {
    setAPIKeys(this.props.dispatch)
    setReports(this.props.dispatch)
  }
  
  render() {
    return (
    <>
      <div className='row'>
        <NavBar />
      </div>
      <div className='row'>
        <MainContainer />
      </div>
    </>
    )
  }
}

export default connect() (App)
