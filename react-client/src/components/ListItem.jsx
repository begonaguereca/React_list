import React from 'react';

class ListItem extends React.Component  {
  handleClick() {
    this.props.delete(this.props.id);
  }

  render () {
    return (
      <div className="row text-center">
        <div className="col-md-11">
          <li className="list-group-item">{ this.props.item }</li>
        </div>

        <div className="col-md-1 delete">
          <button onClick={this.handleClick.bind(this)} className="close" type="button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      </div>
    )}
  }

export default ListItem;
