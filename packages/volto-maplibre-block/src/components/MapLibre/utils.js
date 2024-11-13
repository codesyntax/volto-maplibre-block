export const basicOSMStyle = {
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
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm', // This must match the source key above
    },
  ],
};

/* taken from https://stackoverflow.com/a/71659589/1427863
 *
 */

const getSWCoordinates = (coordinatesCollection) => {
  const lowestLng = Math.min(
    ...coordinatesCollection.map((coordinates) => coordinates[0]),
  );
  const lowestLat = Math.min(
    ...coordinatesCollection.map((coordinates) => coordinates[1]),
  );

  return [lowestLng, lowestLat];
};

const getNECoordinates = (coordinatesCollection) => {
  const highestLng = Math.max(
    ...coordinatesCollection.map((coordinates) => coordinates[0]),
  );
  const highestLat = Math.max(
    ...coordinatesCollection.map((coordinates) => coordinates[1]),
  );

  return [highestLng, highestLat];
};

export const calcBoundsFromCoordinates = (coordinatesCollection) => {
  return [
    getSWCoordinates(coordinatesCollection),
    getNECoordinates(coordinatesCollection),
  ];
};
