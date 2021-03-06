import React, { PureComponent } from 'react';
import {
  oneOfType, node, string, arrayOf, bool,
} from 'prop-types';
import classnames from 'classnames';

import omit from '../utils/omit';
import { cssClasses, usedProps, enums } from './constants';

class ListSubheader extends PureComponent {
  static propTypes = {
    children: oneOfType([node, arrayOf(node)]),
    className: string,
    secondary: bool,
    htmlTag: string,
  };

  static defaultProps = {
    children: null,
    className: null,
    secondary: false,
    htmlTag: enums.HEADER,
  };

  render() {
    const { className, htmlTag: Tag, children } = this.props;
    const classNames = classnames(cssClasses.SUBHEADER, className);

    return (
      <Tag className={classNames} {...omit(this.props, usedProps.SUBHEADER)}>
        {children}
      </Tag>
    );
  }
}

export default ListSubheader;
