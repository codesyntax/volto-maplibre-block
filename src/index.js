import { MaplibreBlockEdit } from './components/Blocks/MaplibreBlock/Edit.jsx';
import MaplibreBlockView from './components/Blocks/MaplibreBlock/View.jsx';
import mapSVG from '@plone/volto/icons/map.svg';

const applyConfig = (config) => {
  // Own blocks
  config.blocks.blocksConfig['mapLibreBlock'] = {
    id: 'mapLibreBlock',
    title: 'MapLibre',
    icon: mapSVG,
    edit: MaplibreBlockEdit,
    view: MaplibreBlockView,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    common: true,
    tileLayers: [
      {
        id: 'osm',
        name: 'OpenStreetMap',
        type: 'raster',
        urls: [
          'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        attribution:
          '&copy; OpenStreetMap Contributors | Kartendarstellung &copy; OpenTopoMap (CC-BY-SA)',
        maxzoom: 19,
      },
      {
        id: 'osmfr',
        name: 'OpenStreetMap-Fr',
        type: 'raster',
        urls: [
          'https://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
          'https://b.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
          'https://c.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        ],
        attribution:
          'map data \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors under ODbL ',
        tileSize: 256,
        maxzoom: 19,
      },
      {
        id: 'osmde',
        name: 'OpenStreetMap-De',
        type: 'raster',
        urls: ['https://tile.openstreetmap.de/tiles/{z}/{x}/{y}.png'],
        attribution:
          'map data \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors under ODbL ',
        tileSize: 256,
        maxzoom: 19,
      },
      {
        id: 'opentopomap',
        name: 'OSM OpenTopoMap',
        type: 'raster',
        urls: [
          'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
          'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
          'https://c.tile.opentopomap.org/{z}/{x}/{y}.png',
        ],
        attribution:
          'Kartendaten: \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> Mitwirkende, <a href="http://viewfinderpanoramas.org/">SRTM</a> | map style: \u00a9 <a href=""https://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        tileSize: 256,
        maxzoom: 19,
      },
    ],
  };

  return config;
};

export default applyConfig;
