import React from 'react';

class Modal extends React.Component {

  getInitialState() {
    return {
      value: ""
    };
  }

  componentDidMount() {
    this.$el = $(this.getDOMNode());
    this.$el.on("hidden.bs.modal", this.reset);
  }

  componentWillUnmount() {

  }

  show() {
    this.$el.modal("show");
  }

  reset() {
    this.setState({ value: "" });
  }

  save() {

  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className"modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">x</span>
                <span className="sr-only">Close</span>  
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
