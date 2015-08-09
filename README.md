# react-stack-view
StackView component for react

## Installation
```sh
npm install react-stack-view
```

## Usage
```js
import React, {Component} from 'react';
import StackView from 'react-stack-view';

class MyComponent extends Component {
  add() {
    this.refs.stack.push(<div></div>);
  }

  remove() {
    this.refs.stack.pop();
  }

  replace() {
    this.refs.stack.replace([<div></div>]);
  }


  render() {
    return (
      <StackView ref="stack">
        [optional default content]
      </StackView>
    );
  }
}
```
