import React from 'react';

class TodoList extends React.Component {

  renderItems() {
    return _.map(this.props.todos, function(todo) {
      return <Item todo={todo} />;
    });
  }

  render() {
    return {
      <ul className="list-group">
        {this.renderItems()}
      </ul>
    };
  }

}
