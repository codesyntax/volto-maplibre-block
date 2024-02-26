import { MaplibreBlockEdit } from './components/Blocks/MaplibreBlock/Edit.jsx';
import { MaplibreBlockView } from './components/Blocks/MaplibreBlock/View.jsx';
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
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      },
      {
        id: 'osmfr',
        name: 'OpenStreetMap-Fr',
        url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        attribution:
          'map data \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors under ODbL ',
      },
      {
        id: 'osmde',
        name: 'OpenStreetMap-De',
        url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attribution:
          'map data \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors under ODbL ',
      },
      {
        id: 'opentopomap',
        name: 'OSM OpenTopoMap',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution:
          'Kartendaten: \u00a9 <a href="http://osm.org/copyright">OpenStreetMap</a> Mitwirkende, <a href="http://viewfinderpanoramas.org/">SRTM</a> | map style: \u00a9 <a href=""https://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      },
    ],
  };

  return config;
};

export default applyConfig;
