import React, { Component } from 'react';
import { Map, GoogleApiWrapper , InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '30rem'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        className="map"
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}

      >

      <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

        <style jsx>{`
          .map{
            position: relative;
          }
        `}</style>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyCS6MPY1J6J_OVVfwjv2z3mLQLbIBiH10o'
  })
)(MapContainer);