import React from 'react';
import PropTypes from 'prop-types';
import { ResidentialCommercialPageTemplate } from '../../templates/residential-commercial-page';

const ResidentialCommercialPagePreview = ({ entry, widgetFor }) => (
  <ResidentialCommercialPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ResidentialCommercialPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ResidentialCommercialPagePreview;
