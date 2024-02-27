import { useState } from 'react';
import config from '@plone/volto/registry';
import { FullscreenControl, Marker, NavigationControl } from 'react-map-gl';
import { Map, useMap, Popup, ScaleControl } from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';
import { basicOSMStyle } from './utils';
import markerPNG from '../../icons/marker-icon.png';
import { calcBoundsFromCoordinates } from './utils';

export const FitBounds = (props) => {
  const { markers } = props;
  const map = useMap();

  const bounds = calcBoundsFromCoordinates(
    markers.map((marker) => [
      parseFloat(marker.longitude),
      parseFloat(marker.latitude),
    ]),
  );

  map.current.fitBounds(
    bounds,

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
    tilesLayer,
    height = '500px',
    fitBounds = true,
  } = props;

  const selectedMapStyles =
    config.blocks.blocksConfig.mapLibreBlock.tileLayers.filter(
      (item) => item.id === tilesLayer,
    );
  const selectedMapStyle = selectedMapStyles[0];

  const mapStyle = selectedMapStyle
    ? {
        version: 8,
        sources: {
          [selectedMapStyle.id]: {
            type: selectedMapStyle.type,
            tiles: selectedMapStyle.urls,
            tileSize: selectedMapStyle.tileSize,
            attribution: selectedMapStyle.attribution,
            maxzoom: selectedMapStyle.maxzoom,
          },
        },
        layers: [
          {
            id: selectedMapStyle.id,
            type: selectedMapStyle.type,
            source: selectedMapStyle.id,
          },
        ],
      }
    : basicOSMStyle;

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
                <img src={markerPNG} alt={item.title} />
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
            <img src={markerPNG} alt={marker.title} />
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

        {markers.length > 1 && fitBounds && <FitBounds markers={markers} />}
      </Map>
    </div>
  );
};
