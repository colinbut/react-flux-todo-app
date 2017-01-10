import React from 'react';

class Item extends React.Component {

  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
  }

  render() {
    return <li className="list-group-item pointer" onClick={this.toggle}>{this.props.todo.name}</li>
  }

}
