import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import { withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import corona_icon from '../pictures/corona_icon.png'

export class QuarantineCenters extends Component {
    
        state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    
        onMarkerClick = (props, marker) => {
            this.setState({
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: true
            })
        }
    
        onMapClicked = () => {
            if(this.state.showingInfoWindow){
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null,
                })
            }
        }
    // Use below to view report of an infection from map
        // navigateToStation = () => {
        //     const button = (<button id='navigate-to-location' onClick={e =>
        //    {this.props.history.push('/navigation-card')}}> Navigate to location </button>);
        //    ReactDOM.render(React.Children.only(button), document.getElementById("navi-div"));
        // }
       
    
    
        render() {
           const  mapStyles = {width: '100%', height: '90%'}
           console.log(this.props.allReports.AllReports)
           
            return (
                <div>
                    <Map
                        google={this.props.google}
                        zoom={7}
                        style={mapStyles}
                        initialCenter={{ 
                            lat: this.props.currentCountryCenter.lat,
                            lng: this.props.currentCountryCenter.lng
                        }}
                        // onReady={this.backToSearchResults}
                        onClick={this.onMapClicked}
                            >
    
                        {this.props.allReports.AllReports.map(report =><Marker 
                                key={report.id}
                                state={report.state}
                                city={report.city}
                                nearest_landmark={report.nearest_landmark}
                                description={report.description}
                                lga={report.lga}
                                city_town_or_village={report.city_town_or_village}
                                verified={report.verified}
                                date_reported={report.created_at}
                                position={{lat: report.lat, lng: report.lng}}
                                onClick ={this.onMarkerClick }
                                icon={corona_icon}
                                report={report}
                        />                    
                        )}
    
                        <InfoWindow 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        // onOpen={this.navigateToStation}
                        >
                            <>
                            <div className='row'>
                                <strong>location: </strong> {this.state.selectedPlace.city}, {this.state.selectedPlace.state}, {this.state.selectedPlace.lga}, {this.state.selectedPlace.city_town_or_village}
                            </div>
                            <div className='row'>
                                <strong>Nearest landmark: </strong> {this.state.selectedPlace.nearest_landmark}, {this.state.selectedPlace.city}
                            </div>
                            <div className='row'>
                                <strong>Date reported: </strong> {this.state.selectedPlace.date_reported}
                            </div>
                            <div className='row'>
                                <strong>Report description: </strong> {this.state.selectedPlace.description}
                            </div>
    
                            </>
                        </InfoWindow>
                </Map>
                </div>
            )
        }
    }
    const WrappedContainer = GoogleApiWrapper(
        (props) => ({
          apiKey: props.apiKey,
        }
        ))(QuarantineCenters)
    
export default withRouter(WrappedContainer)