import React from 'react';
import PropTypes from 'prop-types';
import { EnergyStoragePageTemplate } from '../../templates/energy-storage-page';

const EnergyStoragePagePreview = ({ entry, widgetFor }) => (
  <EnergyStoragePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

EnergyStoragePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EnergyStoragePagePreview;
