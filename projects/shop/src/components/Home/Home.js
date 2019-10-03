import React from 'react';
import capitalize from 'lodash/capitalize';
import { Icon } from '@siesta/components';
import styles from './Home.css';
import Heading from './Home.css.js';

export default ({route}) => (
  <div className={styles.bg}>
    <Heading>Stuff HOME{capitalize(route.path)}</Heading>
    <Icon
      className={styles[`logo`]}
      name="logo-mark"
    />
  </div>
);
