import { Label } from 'semantic-ui-react';

export const egoerak = {
  1: <Label color="red">Egin gabe</Label>,
  2: <Label color="green">Eginda</Label>,
  3: <Label color="teal">Hitzartuta</Label>,
};

export const mapStyle = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '&copy; OpenStreetMap Contributors | Kartendarstellung &copy; OpenTopoMap (CC-BY-SA)',
      maxzoom: 19,
    },
    topo: {
      type: 'raster',
      tiles: ['https://a.tile.opentopomap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '&copy; OpenStreetMap Contributors | Kartendarstellung &copy; OpenTopoMap (CC-BY-SA)',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm', // This must match the source key above
    },
  ],
};

export const DEFAULT_ONE_ITEM_ZOOM = 5;
