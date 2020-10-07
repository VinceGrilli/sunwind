import React from 'react';
import PropTypes from 'prop-types';
import { IncentiveProgramsPageTemplate } from '../../templates/incentive-programs-page';

const IncentiveProgramsPagePreview = ({ entry, widgetFor }) => (
  <IncentiveProgramsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

IncentiveProgramsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default IncentiveProgramsPagePreview;
