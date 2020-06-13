import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import { withRouter } from 'react-router-dom'
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

        render() {
           const  mapStyles = {width: '100%', height: '90%'}
            return (
                <div>
                    <Map
                        google={this.props.google}
                        zoom={6.4}
                        style={mapStyles}
                        initialCenter={{ 
                            lat: this.props.currentCountryCenter.lat,
                            lng: this.props.currentCountryCenter.lng
                        }}
                        onClick={this.onMapClicked}
                            >
    
                        {this.props.allCentres.AllQuarantineCentres.map(centre =><Marker 
                                key={centre.id}
                                state={centre.state}
                                city={centre.city}
                                nearest_landmark={centre.nearest_landmark}
                                lga={centre.lga}
                                city_town_or_village={centre.city_town_or_village}
                                verified={centre.verified}
                                date_reported={centre.created_at}
                                position={{lat: centre.lat, lng: centre.lng}}
                                onClick ={this.onMarkerClick }
                                icon={corona_icon}
                                centre={centre}
                        />                    
                        )}
    
                        <InfoWindow 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
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