import React from 'react';
import { useIntl } from 'react-intl';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';

import { MaplibreBlockSchema } from './schema';
import { BlockViewComponent } from './View';
export const MaplibreBlockEdit = (props) => {
  const { block, data, selected } = props;
  const handleChange = (id, value) => {
    props.onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  const intl = useIntl();
  const schema = MaplibreBlockSchema(intl);

  return (
    <>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          onChangeField={handleChange}
        />
      </SidebarPortal>
      <BlockViewComponent data={data} />
    </>
  );
};
