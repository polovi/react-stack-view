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

  replace(components) {
    this.setState({
      components: components
    });
  }

  count() {
    return this.state.components.length;
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
