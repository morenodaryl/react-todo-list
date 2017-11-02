import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainList from './MainList.js'
import "../css/app.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <div className="todo-body">
          <MainList items={this.props.notes}/>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    notes: state.notesReducer.notes
  }
}

export default connect(mapsStateToProps, {})(App);
