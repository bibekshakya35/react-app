import React, { Component } from 'react';
class Counter extends Component {
  styles = {
    fontWeight: 'bold',
    fontSize: 30
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log('clear');
  }
}

export default Counter;
