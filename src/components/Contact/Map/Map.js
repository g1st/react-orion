/* global google*/

import React from 'react';
import './Map.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 52.489471, lng: -1.898575 }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: 52.489471, lng: -1.898575 }}
          onClick={props.onMarkerClick}
          title={'Orion'}
          animation={
            props.isMarkerBouncing
              ? google.maps.Animation.BOUNCE
              : google.maps.setAnimation
          }
        />
      )}
    </GoogleMap>
  ))
);

class Map extends React.Component {
  state = {
    isMarkerShown: true,
    isMarkerBouncing: true
  };

  handleMarkerClick = () => {
    this.setState({
      isMarkerBouncing: !this.state.isMarkerBouncing
    });
  };

  render() {
    return (
      <div className="map">
        <div id="map">
          <div className="map__info">
            <p>
              <i className="fas fa-map-marker-alt map-icons" />Orion Services
              Ltd
            </p>
            <p>
              <i className="fas fa-phone map-icons" />123-567-8899
            </p>
            <p>
              <i className="far fa-envelope map-icons" />hello@domain.com
            </p>
          </div>
          <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            isMarkerBouncing={this.state.isMarkerBouncing}
            onMarkerClick={this.handleMarkerClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBPZm4utKKAFoqX70B5Kxvr9MkXAZ65o2Y&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default Map;
