import React from 'react';
import PropTypes from 'prop-types';
import { PaymentOptionsPageTemplate } from '../../templates/payment-options-page';

const PaymentOptionsPagePreview = ({ entry, widgetFor }) => (
  <PaymentOptionsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

PaymentOptionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PaymentOptionsPagePreview;
