import React, {Component, PropTypes} from 'react';

class StackView extends Component {
  static childContextTypes = {
		stack: PropTypes.object
	}

  static propTypes = {
    createElement: PropTypes.func,
    children: PropTypes.any
  }

  static defaultProps = {
    createElement: React.createElement
  }

  constructor(props) {
    super(props);

    this.state = {
      components: []
    };
  }

  getChildContext() {
		return {
			stack: this
		}
	}

  at(index) {
    return this.state.components[index];
  }

  indexOf(Component) {
    return this.state.components.indexOf(Component);
  }

  insert(index, Component) {
    var {components} = this.state;
    components.splice(index, 0, Component);
    this.setState({
      components: components
    });
  }

  push(Component) {
    this.setState({
      components: this.state.components.concat(Component)
    });
  }

  pop() {
    if (this.state.components.length) {
      this.setState({
        components: this.state.components.slice(0, -1)
      });
    }
  }

  remove(Component) {
    var index = this.indexOf(Component);
    if (index) {
      var {components} = this.state;
      components.splice(index, 1);
      this.setState({
        components: components
      });
    }
  }

  replace(components) {
    this.setState({
      components: components
    });
  }

  count() {
    return this.state.components.length;
  }

  top() {
    return this.state.components.slice(-1).pop();
  }

  render() {
    return (
      <section className="stack">
        {this.props.children}
        {this.state.components.map((component, index) => {
          if (!React.isValidElement(component)) {
            component = this.props.createElement(component);
          }
          return React.cloneElement(component, {key: index});
        })}
      </section>
    );
  }
}

export default StackView;
