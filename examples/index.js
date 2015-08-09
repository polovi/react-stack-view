import React, {Component} from 'react';
import StackView from 'react-stack-view';
import View from './view';


class View extends Component {
  render() {
    return (
      <div>
        component {JSON.stringify(this.props)}
      </div>
    );
  }
}


class App extends Component {

  add() {
    this.refs.stack.push(View);
  }

  add2() {
    this.refs.stack.push(React.createElement(View, {msg: 'Xxxx'}));
  }

  remove() {
    this.refs.stack.pop();
  }

  change() {
    this.refs.stack.replace([React.createElement(View, {v: 'Replaced'})]);
  }

  componentDidMount() {
    this.refs.stack.push(React.createElement(View, {msg: 'On start'}));
  }

  render() {
    return (
      <div>
        <button onClick={::this.add}>push object</button>
        <button onClick={::this.add2}>push element</button>
        <button onClick={::this.remove}>pop</button>
        <button onClick={::this.change}>replace</button>
        <StackView ref="stack">
          default content
        </StackView>
      </div>
    );
  }
}

export default App;
