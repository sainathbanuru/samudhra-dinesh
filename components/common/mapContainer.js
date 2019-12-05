import React, { Component } from "react";
import styled from "styled-components";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import AddressBlock from "./addressBlock";

const MapSection = styled.div`
  @media (max-width: 767px) {
    height: 300;
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 16px;
    width: 100%;
    height: 100%;
  }
`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    const { mobile } = this.props;
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          height: mobile ? 300 : "100%",
          width: "100%"
        }}
      >
        <Map
          style={{}}
          google={this.props.google}
          zoom={17}
          initialCenter={{
            // 40.4281949,-74.5652628
            lat: 40.428317,
            lng: -74.56331
          }}
          draggable={true}
          zoomControl={true}
        >
          {/* 40°25'42.7"N 74°33'46.2"W */}
          <Marker
            onClick={() => {}}
            title={"The marker`s title will appear as a tooltip."}
            name={"SOMA"}
            position={{ lat: 40.428317, lng: -74.56331 }}
            icon={{
              url: "/static/images/marker.png",
              anchor: new google.maps.Point(8, 8),
              scaledSize: new google.maps.Size(32, 32)
            }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <AddressBlock />
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCfx2NlolIHTaJCLqyM4KT2diPKqWHzm_Q",
  v: "3.30"
})(MapContainer);
