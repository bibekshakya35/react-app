import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onReset={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
