import React from 'react';
import { MapLibre } from '../../MapLibre';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers';

const MaplibreBlockView = (props) => {
  const { data, className } = props;
  const center = {
    latitude: data?.latitude || '0.0',
    longitude: data?.longitude || '0.0',
    zoom: data?.zoom || 10,
  };

  // filter out items without correct values
  let markers =
    data?.markers?.filter((item) => item.latitude && item.longitude) || [];

  return (
    <div className={cx('block maplibre', className)}>
      <MapLibre
        markers={markers}
        center={center}
        height={data.height}
        tilesLayer={data.tilesLayer}
      />
    </div>
  );
};

export default withBlockExtensions(MaplibreBlockView);
