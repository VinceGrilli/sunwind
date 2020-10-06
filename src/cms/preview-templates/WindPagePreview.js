import React from 'react';
import PropTypes from 'prop-types';
import { WindPageTemplate } from '../../templates/wind-page';

const WindPagePreview = ({ entry, widgetFor }) => (
  <WindPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

WindPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WindPagePreview;
