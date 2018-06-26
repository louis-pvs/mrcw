import React, { PureComponent } from 'react';
import { oneOfType, node, string, arrayOf } from 'prop-types';
import classnames from 'classnames';

import omit from '../utils/omit';
import { cssClasses, usedProps, enums } from './constants';

class CardIcons extends PureComponent {
  static propTypes = {
    children: oneOfType([node, arrayOf(node)]),
    className: string,
    htmlTag: string,
  };
  static defaultProps = {
    children: null,
    className: null,
    htmlTag: enums.DIV,
  };

  render() {
    const className = classnames(cssClasses.ICONS, this.props.className);
    const Tag = this.props.htmlTag;

    return (
      <Tag className={className} {...omit(this.props, usedProps.ICONS)}>
        {this.props.children}
      </Tag>
    );
  }
}

export default CardIcons;
