import React, { Component } from 'react'
import './App.css';
import {connect} from 'react-redux'
import { setAPIKeys, resetViews, setFacts, setGlobalCovidStat } from './redux/actions';
import NavBar from './containers/NavBar';
import MainContainer from './containers/MainContainer';


export class App extends Component {

  componentDidMount() {
    var dates = [];
    var date = new Date();

    for (var i = 0; i < 30; i++){
      var tempDate = new Date();
      tempDate.setDate(date.getDate()-i);
      let tempMonth = tempDate.getMonth()
      let tempDay = tempDate.getDate()
      if(tempMonth < 10 && tempDay < 10){
        let tempMonthToUse = '0' + (tempMonth + 1)
        let tempDayToUse = '0' + (tempDay)
        dates.push(tempDate.getFullYear() + "-" + tempMonthToUse + "-" + tempDayToUse)
      }else if(tempMonth < 10 && tempDay > 10){
        let tempMonthToUse = '0' + (tempMonth + 1)
        let tempDayToUse = (tempDay)
        dates.push(tempDate.getFullYear() + "-" + tempMonthToUse + "-" + tempDayToUse)
      }else if(tempMonth > 10 && tempDay < 10){
        let tempMonthToUse = (tempMonth + 1)
        let tempDayToUse = '0' + (tempDay)
        dates.push(tempDate.getFullYear() + "-" + tempMonthToUse + "-" + tempDayToUse)
      }else if(tempMonth > 10 && tempDay > 10){
        let tempMonthToUse = (tempMonth + 1)
        let tempDayToUse = (tempDay)
        dates.push(tempDate.getFullYear() + "-" + tempMonthToUse + "-" + tempDayToUse)
      }
    }

    setAPIKeys(this.props.dispatch)
    setFacts(this.props.dispatch)
    resetViews(this.props.dispatch)
    setGlobalCovidStat(this.props.dispatch, dates)
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
