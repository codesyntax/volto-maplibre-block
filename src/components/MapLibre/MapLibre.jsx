import { useState } from 'react';

import { UniversalLink } from '@plone/volto/components';
import { FullscreenControl, Marker, NavigationControl } from 'react-map-gl';
import { Map, useMap, Popup, ScaleControl } from 'react-map-gl/maplibre';
import { WebMercatorViewport } from 'viewport-mercator-project';

import { mapStyle } from './utils';

import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

export const FitBounds = (props) => {
  const { markers } = props;
  const map = useMap();
  map.current.fitBounds(
    markers.map((marker) => [
      parseFloat(marker.longitude),
      parseFloat(marker.latitude),
    ]),
    {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
    },
  );
  return null;
};

export const MapLibre = (props) => {
  const {
    markers = [],
    marker = null,
    center = {
      latitude: 43.2083,
      longitude: -2.4681,
      zoom: 12,
    },
    height = '500px',
    fitBounds = true,
  } = props;

  const [popupInfo, setPopupInfo] = useState(
    markers.length > 0 ? null : marker,
  );

  return (
    <div className="map" style={{ height: height }}>
      <Map initialViewState={center} mapStyle={mapStyle}>
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {markers.length > 0 &&
          !marker &&
          markers.map((item, index) => {
            return (
              <Marker
                key={index}
                longitude={parseFloat(item.longitude)}
                latitude={parseFloat(item.latitude)}
                anchor="bottom"
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setPopupInfo(item);
                }}
              >
                <img src="/marker-icon.png" alt={item.title} />
              </Marker>
            );
          })}

        {markers.length === 0 && marker && (
          <Marker
            longitude={parseFloat(marker.longitude)}
            latitude={parseFloat(marker.latitude)}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(marker);
            }}
          >
            <img src="/marker-icon.png" alt={marker.title} />
          </Marker>
        )}

        {popupInfo && (
          <Popup
            anchor="top"
            latitude={parseFloat(popupInfo.latitude)}
            longitude={parseFloat(popupInfo.longitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>{popupInfo.title}</div>
          </Popup>
        )}

        {markers.length > 0 && fitBounds && <FitBounds markers={markers} />}
      </Map>
    </div>
  );
};
