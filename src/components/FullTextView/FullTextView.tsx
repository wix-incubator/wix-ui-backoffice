import * as React from 'react';
import {string, number, any, oneOfType, Requireable} from 'prop-types';
import * as shallowequal from 'shallowequal';
import {Tooltip} from '../Tooltip';
import style from './FullTextView.st.css';

export interface FullTextViewProps {
  children?: React.ReactNode;
  maxWidth?: number | string;
}

export interface FullTextViewState {
  isEllipsisActive: boolean;
}

const isEllipsisActive = (node: HTMLElement) => node && node.offsetWidth < node.scrollWidth;

export class FullTextView extends React.Component<FullTextViewProps, FullTextViewState> {
  static displayName = 'FullTextView';

  static propTypes = {
    /** max width of the text */
    maxWidth: oneOfType([number, string]),
    /** any nodes to be rendered (usually text nodes) */
    children: any
  }

  private textNode: any;
  private ellipsesTimeout: any;

  state = {
    isEllipsisActive: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateEllipsesState);
    this.updateEllipsesState();
  }

  componentDidUpdate(prevProps) {
    // if props changed, then we want to re-check node for ellipsis state
    // and we can not do such check in render, because we want to check already rendered node
    if (!shallowequal(prevProps, this.props)) {
      this.updateEllipsesState();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateEllipsesState);
  }

  handleTextRef = node => this.textNode = node;

  updateEllipsesState = () => {
    clearTimeout(this.ellipsesTimeout);
    this.ellipsesTimeout = setTimeout(() => {
      this.setState({isEllipsisActive: isEllipsisActive(this.textNode)})
    }, 30);
  };

  renderText() {
    return (
      <span
        {...style('root', {}, this.props)}
        style={{ maxWidth: this.props.maxWidth }}
        ref={this.handleTextRef}
      >
        {this.props.children}
      </span>
    );
  }

  render() {
    if (!this.state.isEllipsisActive) {
      return this.renderText();
    }

    return (
      <Tooltip content={this.props.children}>
        {this.renderText()}
      </Tooltip>
    );
  }
};
