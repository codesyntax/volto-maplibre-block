import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';
export const MaplibreMarkerSchema = (intl) => ({
  title: intl.formatMessage(messages.marker),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'latitude', 'longitude', 'anchor', 'icon'],
    },
  ],

  properties: {
    title: {
      title: intl.formatMessage(messages.title),
      type: 'string',
    },
    latitude: {
      title: intl.formatMessage(messages.latitude),
      type: 'number',
    },
    longitude: {
      title: intl.formatMessage(messages.longitude),
      type: 'number',
    },
    anchor: {
      title: intl.formatMessage(messages.anchor),
      description: intl.formatMessage(messages.anchorDescription),
      choices: [
        //['top', intl.formatMessage(messages.top)],
        ['bottom', intl.formatMessage(messages.bottom)],
        // ['left', intl.formatMessage(messages.left)],
        // ['right', intl.formatMessage(messages.right)],
      ],
    },
    icon: {
      title: intl.formatMessage(messages.icon),
      type: 'number',
      widget: 'icon_select',
    },
  },
  required: [],
});

export const MaplibreBlockSchema = (intl) => ({
  title: intl.formatMessage(messages.map),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['latitude', 'longitude', 'zoom'],
    },
    {
      id: 'content',
      title: intl.formatMessage(messages.content),
      fields: ['markers', 'fitbounds'],
    },
    {
      id: 'style',
      title: intl.formatMessage(messages.style),
      fields: ['tilesLayer', 'height'],
    },
  ],

  properties: {
    latitude: {
      title: intl.formatMessage(messages.latitude),
      type: 'number',
      initialValue: 51.509865,
      maximum: 90,
      minimum: -90,
    },
    longitude: {
      title: intl.formatMessage(messages.longitude),
      type: 'number',
      initialValue: -0.118092,
      maximum: 180,
      minimum: -180,
    },
    zoom: {
      title: intl.formatMessage(messages.zoom),
      type: 'number',
      initialValue: 8,
      maximum: 18,
      minimum: 0,
    },
    height: {
      title: intl.formatMessage(messages.height),
      initialValue: '500px',
    },
    markers: {
      title: intl.formatMessage(messages.markers),
      schema: MaplibreMarkerSchema(intl),
      widget: 'object_list',
    },
    fitbounds: {
      title: intl.formatMessage(messages.fitBounds),
      description: intl.formatMessage(messages.fitBoundsDescription),
      type: 'boolean',
      default: true,
    },
    tilesLayer: {
      title: intl.formatMessage(messages.tilesLayer),
      choices: config.blocks.blocksConfig.mapLibreBlock.tileLayers.map(
        (item) => {
          return [item.id, item.name];
        },
      ),
      initialValue: 'osm',
    },
  },
  required: [],
});

const messages = defineMessages({
  map: {
    id: 'Map',
    defaultMessage: 'Map',
  },
  latitude: {
    id: 'Latitude',
    defaultMessage: 'Latitude',
  },
  longitude: {
    id: 'Longitude',
    defaultMessage: 'Longitude',
  },
  zoom: {
    id: 'Zoom',
    defaultMessage: 'Zoom',
  },
  height: {
    id: 'Height',
    defaultMessage: 'Height',
  },
  icon: {
    id: 'Icon',
    defaultMessage: 'Icon',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  marker: {
    id: 'Marker',
    defaultMessage: 'Marker',
  },
  markers: {
    id: 'Markers',
    defaultMessage: 'Markers',
  },
  content: {
    id: 'Content',
    defaultMessage: 'Content',
  },
  style: {
    id: 'Style',
    defaultMessage: 'Style',
  },
  anchor: {
    id: 'Anchor',
    defaultMessage: 'Anchor',
  },
  anchorDescription: {
    id: 'Where to anchor the popup message in the marker',
    defaultMessage: 'Where to anchor the popup message in the marker',
  },
  top: {
    id: 'Top',
    defaultMessage: 'Top',
  },
  bottom: {
    id: 'Bottom',
    defaultMessage: 'Bottom',
  },
  left: {
    id: 'Left',
    defaultMessage: 'Left',
  },
  right: {
    id: 'Right',
    defaultMessage: 'Right',
  },
  fitBounds: {
    id: 'Center map based on markers?',
    defaultMessage: 'Center map based on markers?',
  },
  fitBoundsDescription: {
    id: 'Select to automatically center the map according to the added markers.',
    defaultMessage:
      'Select to automatically center the map according to the added markers.',
  },
  tilesLayer: {
    id: 'Tile style',
    defaultMessage: 'Tile style',
  },
});
