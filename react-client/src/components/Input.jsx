import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    }
  }

  handleClick(){
    this.props.updateItem(this.state.value)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
    <div className="row text-center">
      <div className="col-md-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group mb-3">
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" placeholder="New List Item" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button onClick={this.handleClick.bind(this)} className="btn btn-dark" type="button">Enter</button>
            </div>
          </div>
        </form>
        </div>
    </div>
    )
  }
}

export default List;
