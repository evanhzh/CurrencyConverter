import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, conversionRate, quoteSymbol, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quoteSymbol} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quoteSymbol: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
