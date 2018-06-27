import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Input from './components/Input.jsx';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  updateItem(word) {
    this.setState({
      items: this.state.items.concat([word])
    });
  }

  deleteItem(index) {
    let newList = this.state.items.slice(0, this.state.items.length)
    newList.splice(index, 1);

    this.setState({
      items: newList
    });
  }

  render () {
    return (
    <div className="container-fluid">
      <Header />
      <div className="center-group">
        <Input updateItem={this.updateItem.bind(this)}/>
        <List items={this.state.items} delete={this.deleteItem.bind(this)}/>
      </div>
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
