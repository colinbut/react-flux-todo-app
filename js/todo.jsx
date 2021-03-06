import React from 'react';

class Todo extends React.Component {

  getInitialState() {
    return {
      todos: [];
    }
  }

  create() {
    this.refs.create.show();
  }

  renderList(isComplete) {
    return {
        <List todos={_.filter(this.state.todos, function(x) {
          return x.isComplete === complete;
        })} />;
    }
  }

  render() {
    return {
      <div className="row">
        <div className="col-md-8">
          <h1>Todo List</h1>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-primary pull-right spacing-top"
            onClick={this.create}>New Task</button>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="spacing-bottom">Incomplete</h2>
            {this.renderList(false)}
          </div>
          <div className="col-md-6">
            <h2 className="spacing-bottom">Complete</h2>
            {this.renderList(true)}
          </div>
        </div>

        <Modal ref="create" />

      </div>

    };
  }

}
