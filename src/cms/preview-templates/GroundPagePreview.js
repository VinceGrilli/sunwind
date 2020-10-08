import React from 'react';
import PropTypes from 'prop-types';
import { GroundPageTemplate } from '../../templates/ground-page';

const GroundPagePreview = ({ entry, widgetFor }) => (
  <GroundPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

GroundPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GroundPagePreview;
