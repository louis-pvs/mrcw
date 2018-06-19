import React, { PureComponent } from 'react';
import { oneOfType, arrayOf, node, string, bool, func } from 'prop-types';
import { MDCChipSet } from '@material/chips';
import classnames from 'classnames';

import './chips.scss';
import ChipsItem from './ChipsItem';

class Chips extends PureComponent {
  static propTypes = {
    children: oneOfType([node, string, arrayOf(node, string)]),
    choice: bool,
    filter: bool,
    onSelect: func,
  };
  static defaultProps = {
    children: null,
    choice: false,
    filter: false,
    onSelect: null,
  };

  static Item = props => <ChipsItem {...props} />;

  ref = null;
  chips = null;
  init = (ref) => {
    if (ref && this.ref !== ref) {
      this.ref = ref;
      this.chips = new MDCChipSet(ref);
    }
  };

  render() {
    const className = classnames('mdc-chip-set', {
      'mdc-chip-set--choice': this.props.choice,
      'mdc-chip-set--filter': this.props.filter,
    });
    return (
      <div className={className} ref={this.init}>
        {this.props.children}
      </div>
    );
  }
}

export default Chips;