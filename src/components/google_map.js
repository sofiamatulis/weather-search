import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // creating a googles map (taking a reference to where you want to render this element which is the reference)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }

}

// direct reference to map . this.refs.map (anywhere else you can access the direct HTML element)


export default GoogleMap;
