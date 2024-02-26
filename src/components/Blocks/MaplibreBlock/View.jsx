import { MapLibre } from '../../MapLibre';

export const BlockViewComponent = (props) => {
  const { data } = props;

  const center = {
    latitude: data?.latitude || '0.0',
    longitude: data?.longitude || '0.0',
    zoom: data?.zoom || 10,
  };

  // filter out items without correct values
  const markers = data.markers.filter(
    (item) => item.latitude && item.longitude,
  );

  return <MapLibre markers={markers} center={center} height={data.height} />;
};

export const MaplibreBlockView = (props) => {
  const { data } = props;

  return <BlockViewComponent data={data} />;
};
