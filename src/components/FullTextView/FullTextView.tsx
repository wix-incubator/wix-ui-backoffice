import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as shallowequal from 'shallowequal';
import {Tooltip} from '../Tooltip';
import {Text} from '../core/CoreText';
import styles from './FullTextView.st.css';

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

  private textNode: any;

  state = {
    isEllipsisActive: false
  }

  componentDidMount() {
    this.updateEllipsesState();
  }

  componentDidUpdate(prevProps) {
    // if props changed, then we want to re-check node for ellipsis state
    // and we can not do such check in render, because we want to check already rendered node
    if (!shallowequal(prevProps, this.props)) {
      this.updateEllipsesState();
    }
  }

  handleTextRef = node => this.textNode = node;

  updateEllipsesState = () => this.setState({isEllipsisActive: isEllipsisActive(this.textNode)});

  renderText() {
    return (
      <span
        className={styles.root}
        style={{ maxWidth: this.props.maxWidth }}
      >
        <Text
          ellipsis
          forceHideTitle
          forwardedRef={this.handleTextRef}
        >
          {this.props.children}
        </Text>
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
