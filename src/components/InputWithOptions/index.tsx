import * as React from 'react';
import {InputWithOptions as CoreInputWithOptions} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {withStylable} from 'wix-ui-core';

export const InputWithOptions = withStylable(
  CoreInputWithOptions,
  style,
  ({size, skin}) => ({[size]: true, [skin]: true})
);

InputWithOptions.defaultProps = {skin: 'standard', size: 'large'};

const amir = () => <InputWithOptions    />

class A extends React.PureComponent<{name: string}, {age: number}> {
  constructor(props: {name: string}) {
    super(props);
    this.state = {
      age: 3
    };
  }
  render() {
    return (
      <div>
          {this.props.name}
      </div>
    );
  }
}

function ident<C extends React.ComponentType>(Comp: C): C { return Comp; }

const MyA = ident(A);

() => (<MyA/>);
