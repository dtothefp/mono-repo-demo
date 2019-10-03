import React from 'react';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import capitalize from 'lodash/capitalize';
import cx from 'classnames';
import { TextBlockInset } from '@siesta/modules';
import { base } from '@siesta/styled';
import styles from './App.css';

const { GlobalStyles } = base;

export default class App extends React.Component {
  makeLinks(routes) {
    const {spacing, ...rest} = styles;

    return routes.reduce((list, route) => {
      const {path, routes: childRoutes} = route;

      list.push(
        <Link
          className={cx(spacing, rest[path])}
          key={path}
          to={path}
        >
          {capitalize(path)}
        </Link>
      );

      if (childRoutes) {
        list.push(
          ...this.makeLinks(childRoutes)
        );
      }

      return list;
    }, []);
  }

  render() {
    const {routes} = this.props.route;
    const content = {
      heading: `Section Heading`,
      subheading: `*Lorem* ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  `,
    };

    return (
      <>
        <GlobalStyles />
        <div className={styles.container}>
          <TextBlockInset content={content} />
          <div>{renderRoutes(routes)}</div>
          {this.makeLinks(routes)}
        </div>
      </>
    );
  }
}
